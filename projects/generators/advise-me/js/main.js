const adviceText = document.getElementById('advice-text');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => {
    fetchAdvice();
});

function fetchAdvice() {
    const url = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const advice = data.slip.advice;
            adviceText.textContent = advice;
        })
        .catch(error => console.error('Error fetching advice:', error));
}
