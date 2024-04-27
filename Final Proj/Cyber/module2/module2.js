document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz-form');
    
    quizForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Define correct answers
        const correctAnswers = {
            q1: 'B',
            q2: 'B',
            q3: 'A',
            q4: 'B',
            q5: 'A',
            q6: 'D',
            q7: 'C',
            q8: 'D',
            q9: 'B',
            q10: 'B'
            // Add more correct answers for additional questions
        };

        // Get user's answers
        const userAnswers = {};
        for (let i = 1; i <= 10; i++) { // Adjust the loop range for the number of questions
            const questionName = 'q' + i;
            const selectedAnswer = document.querySelector('input[name="' + questionName + '"]:checked');
            if (selectedAnswer) {
                userAnswers[questionName] = selectedAnswer.value;
            } else {
                alert('Please answer all questions.');
                return;
            }
        }

        // Check answers
        let score = 0;
        for (const question in userAnswers) {
            if (userAnswers[question] === correctAnswers[question]) {
                score++;
            }
        }

        // Display results
        const totalQuestions = Object.keys(correctAnswers).length;
        const resultPercentage = (score / totalQuestions) * 100;
        const resultMessage = `You scored ${score} out of ${totalQuestions}. That's ${resultPercentage.toFixed(2)}%!`;
        alert(resultMessage);
    });
});
