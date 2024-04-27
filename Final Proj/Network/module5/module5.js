function checkAnswers(event) {
    event.preventDefault(); // Prevent the form from submitting

    const quizForm = document.getElementById('quizForm');
    const quizItems = quizForm.getElementsByClassName('quiz-item');
    let correctAnswers = 0;
    let unanswered = false;

    // Define correct answers
    const answers = ['c', 'c', 'b', 'd', 'd', 'd', 'c', 'd', 'c', 'a'];

    // Loop through each quiz item
    for (let i = 0; i < quizItems.length; i++) {
        const radios = quizItems[i].querySelectorAll('input[type="radio"]');
        let answered = false; // Flag to check if the question has been answered
        // Loop through radio buttons to check which one is checked
        for (let j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                answered = true;
                // Check if the checked value matches the correct answer
                if (radios[j].value === answers[i]) {
                    correctAnswers++;
                }
                break; // Break the inner loop since we found the checked radio button
            }
        }
        // If the question has not been answered, set the unanswered flag to true
        if (!answered) {
            unanswered = true;
        }
    }

    // If any question is unanswered, display an alert
    if (unanswered) {
        alert("Please answer all questions.");
        return; // Exit the function early
    }

    // Display results in an alert
    const totalQuestions = quizItems.length;
    const resultPercentage = (correctAnswers / totalQuestions) * 100;
    const resultMessage = `You scored ${correctAnswers} out of ${totalQuestions}. That's ${resultPercentage.toFixed(2)}%!`;
    alert(resultMessage);
}

const quizForm = document.getElementById('quizForm');
quizForm.addEventListener('submit', checkAnswers);
