let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); 
}

function plusSlides(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

function checkAnswer(answer) {
    const result = document.getElementById('quizResult');
    if (answer === '1947') {
        result.textContent = "Correct! India gained independence in 1947.";
        result.style.color = '#4CAF50'; 
    } else {
        result.textContent = "Incorrect. Try again!";
        result.style.color = '#f44336'; 
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const celebrateButton = document.getElementById('celebrateButton');
    const celebrationMessage = document.getElementById('celebrationMessage');

    celebrateButton.addEventListener('click', function() {
        celebrationMessage.textContent = "🎉 Celebrating freedom and unity! 🇮🇳";
        celebrationMessage.style.color = '#ff6600'; 
        celebrationMessage.style.fontSize = '1.5em';
        celebrationMessage.style.animation = 'fade 2s';
    });
});
