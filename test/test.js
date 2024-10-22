function speakText() {
    const text = document.getElementById("textToRead").value;
    
    // Check if the browser supports SpeechSynthesis
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser doesn't support text-to-speech.");
    }
  }
  