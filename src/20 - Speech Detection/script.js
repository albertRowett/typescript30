window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (window.SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    const words = document.querySelector('.words');
    let paragraph = document.createElement('p');
    words.appendChild(paragraph);

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript);
        paragraph.textContent = transcript;

        if (e.results[0].isFinal) {
            paragraph = document.createElement('p');
            words.appendChild(paragraph);
        }
    });
    recognition.addEventListener('end', recognition.start);

    recognition.start();
} else {
    console.error('Speech recognition is not supported in this browser.');
}
