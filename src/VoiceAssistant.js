import React, { useState } from 'react';
import './VoiceAssistant.css';
const VoiceAssistant = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const text = event.results[last][0].transcript;
      setTranscript(text);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  return (
    <div className="container">
      <button onClick={startListening} disabled={listening}>
        {listening ? 'Listening...' : 'Start Listening'}
      </button>
      <p className="transcript">{transcript}</p>
    </div>
  );
};

export default VoiceAssistant;
