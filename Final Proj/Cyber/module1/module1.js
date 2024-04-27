document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz-form');
    const quizSection = document.getElementById('quiz');
    const resultsSection = document.getElementById('results');
    
    quizForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Define correct answers
        const correctAnswers = {
            q1: 'b',
            q2: 'b',
            q3: 'b',
            q4: 'b',
            q5: 'b',
            q6: 'b',
            q7: 'b',
            q8: 'b',
            q9: 'b',
            q10: 'b',
            q11: 'a',
            q12: 'b',
            q13: 'b',
            q14: 'b',
            q15: 'b',
            q16: 'b',
            q17: 'b',
            q18: 'b',
            q19: 'b',
            q20: 'b'
        };

        // Get user's answers
        const userAnswers = {};
        for (let i = 1; i <= 20; i++) {
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
