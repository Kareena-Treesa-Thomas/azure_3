document.addEventListener("DOMContentLoaded", () => {

let speechKey = null;
let speechRegion = null;
let recognizer = null;

// Elements
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const transcript = document.getElementById("transcript");
const ttsInput = document.getElementById("ttsInput");
const speakBtn = document.getElementById("speakBtn");
const charCount = document.getElementById("charCount");
const voiceSelect = document.getElementById("voiceSelect");

// Load backend config
async function loadConfig() {
    try {
        const res = await fetch("/api/config");
        const data = await res.json();

        speechKey = data.speechKey;
        speechRegion = data.speechRegion;

        console.log("Config loaded");
    } catch (err) {
        transcript.innerText = "Server not connected";
    }
}

// Character counter
ttsInput.addEventListener("input", () => {
    charCount.innerText = ttsInput.value.length;
});

// START SPEECH
startBtn.addEventListener("click", () => {

    if (!speechKey) {
        alert("Config not loaded");
        return;
    }

    const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(speechKey, speechRegion);
    const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();

    recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

    transcript.innerText = "Listening...";
    startBtn.disabled = true;
    stopBtn.disabled = false;

    // Interim results (live, still being spoken)
    recognizer.recognizing = (s, e) => {
        transcript.innerText = e.result.text;
    };

    // Final result (locked in once a phrase is complete)
    recognizer.recognized = (s, e) => {
        if (e.result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
            transcript.innerText = e.result.text;
        }
    };

    // Error handling (mic issues, invalid key, network problems, etc.)
    recognizer.canceled = (s, e) => {
        transcript.innerText = "Error: " + e.errorDetails;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    };

    recognizer.startContinuousRecognitionAsync();
});

// STOP SPEECH
stopBtn.addEventListener("click", () => {
    if (recognizer) {
        recognizer.stopContinuousRecognitionAsync(() => {
            transcript.innerText = "Stopped";
            startBtn.disabled = false;
            stopBtn.disabled = true;
        });
    }
});

// TEXT TO SPEECH
speakBtn.addEventListener("click", () => {

    const text = ttsInput.value.trim();

    if (!text) return alert("Type something first");

    const selectedVoice = voiceSelect.value;

    const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(speechKey, speechRegion);
    speechConfig.speechSynthesisVoiceName = selectedVoice;

    const synth = new SpeechSDK.SpeechSynthesizer(speechConfig);

    synth.speakTextAsync(
        text,
        () => {
            synth.close();
        },
        (err) => {
            console.error(err);
            synth.close();
        }
    );
});

// INIT
loadConfig();

});