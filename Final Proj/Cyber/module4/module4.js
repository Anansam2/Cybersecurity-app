document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('quiz-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Define correct answers
            const answers = {
                q1: 'C',
                q2: 'B',
                q3: 'B',
                q4: 'B',
                q5: 'B',
                q6: 'B',
                q7: 'B',
                q8: 'D',
                q9: 'C',
                q10: 'C'
            };

            // Get user's answers
            const userAnswers = {};
            for (let i = 1; i <= 10; i++) {
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
                if (userAnswers[question] === answers[question]) {
                    score++;
                }
            }

            // Provide feedback
            if (score >= 7) {
                alert('Congratulations! You passed the quiz with a score of ' + score + '/10.');
            } else {
                alert('Sorry, you did not pass the quiz. Please try again.');
            }
        });
    });
