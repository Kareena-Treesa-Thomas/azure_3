# 🎤 EchoAI - Live Speech & Text Conversion

A beautiful, real-time speech-to-text and text-to-speech application powered by Web APIs and modern UI design.

## ✨ Features

- **🎤 Speech to Text**: Real-time speech recognition with live transcription
- **🔊 Text to Speech**: Convert text to natural-sounding speech with multiple voices
- **⚡ Real-time Processing**: Instant results with no lag
- **🎨 Beautiful UI**: Modern gradient design with smooth animations
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **🔒 Private & Secure**: All processing happens locally in your browser

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ installed
- A modern web browser (Chrome, Edge, Safari, or Firefox)

### Installation

1. Clone the repository:
```bash
cd EchoAI-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Development Mode

For development with auto-reload:
```bash
npm run dev
```

## 📖 Usage

### Speech to Text
1. Click the **"Start Listening"** button
2. Speak clearly into your microphone
3. Watch your words appear in real-time
4. Click **"Stop"** to finish

### Text to Speech
1. Type your message in the text box
2. Select your preferred voice from the dropdown
3. Click the **"Speak"** button
4. Listen as EchoAI reads your text

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **APIs**: Web Speech API (for speech recognition), Web Audio API (for text-to-speech)
- **Styling**: CSS Gradients, Animations, Flexbox, Grid

## 📁 Project Structure

```
EchoAI-main/
├── public/
│   ├── index.html      # Main HTML file
│   ├── style.css       # Styling and animations
│   └── app.js          # Frontend JavaScript
├── src/
│   └── server.js       # Express server
├── package.json        # Dependencies and scripts
└── README.md          # Documentation
```

## 🎨 Design Features

- Animated gradient background with floating orbs
- Smooth transitions and hover effects
- Real-time status indicators
- Responsive grid layouts
- Custom scrollbar styling
- Mobile-first responsive design

## 🔧 Configuration

### Speech Recognition Languages
Edit the `lang` property in `app.js`:
```javascript
recognition.lang = 'en-US'; // Change to other language codes
```

### Voice Options
Customize voice options in `index.html`:
```html
<option value="en-US">Nova (Warm)</option>
<option value="en-GB">Ember (Energetic)</option>
<option value="en-AU">Aria (Professional)</option>
```

## 📱 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Best experience |
| Edge | ✅ Full | Excellent support |
| Safari | ✅ Full | iOS and macOS support |
| Firefox | ⚠️ Partial | Text-to-speech only |
| Opera | ✅ Full | Chromium-based |

## 🚨 Troubleshooting

**Microphone not working:**
- Check browser permissions for microphone access
- Ensure your microphone is connected and working
- Try a different browser

**No audio output:**
- Check your system volume
- Ensure speakers/headphones are connected
- Verify text-to-speech is enabled in browser settings

**No speech recognition:**
- Only works in modern browsers with Web Speech API support
- Try Chrome, Edge, or Safari
- Check internet connection (some browsers require it)

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

## 👨‍💻 Author

Created with ❤️ for better conversations.

---

**Enjoy EchoAI! 🎉**
