document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    
    quizForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Define correct answers
        const correctAnswers = {
            q1: 'b',
            q2: ['d'], // Correct answers can be an array for checkbox questions
            q3: 'c',
            q4: 'OSI (Open Systems Interconnection)',
            q5: 'Provides unique identifiers for devices on a network',
            q6: 'Dividing a network into smaller, more manageable segments',
            q7: 'b',
            q8: 'Open Systems Interconnection',
            q9: 'Local Area Network',
            q10: 'Modem',
            q11: 'Physical transmission of data',
            q12: 'Wide Area Network',
            q13: 'Connects devices to the internet and translates digital signals',
            q14: 'Establishing rules and conventions for device communication on a network',
            q15: 'Metropolitan Area Network',
            q16: 'A suite of protocols for internet communication',
            q17: 'To determine the network and host portions of an IP address',
            q18: 'a',
            q19: 'Physical or logical arrangement of network devices and connections',
            q20: 'LAN covers a small area, while WAN spans larger geographical distances'
            // Add more correct answers for additional questions
        };

        // Get user's answers
        const userAnswers = {};
        for (let i = 1; i <= 20; i++) { // Adjust the loop range for the number of questions
            const questionName = 'q' + i;
            const selectedAnswer = document.getElementsByName(questionName);
            if (selectedAnswer[0].type === 'radio') {
                for (const answer of selectedAnswer) {
                    if (answer.checked) {
                        userAnswers[questionName] = answer.value;
                        break;
                    }
                }
                if (!userAnswers[questionName]) {
                    alert('Please answer all questions.');
                    return;
                }
            } else if (selectedAnswer[0].type === 'text') {
                userAnswers[questionName] = selectedAnswer[0].value.trim();
                if (userAnswers[questionName] === '') {
                    alert('Please answer all questions.');
                    return;
                }
            } else if (selectedAnswer[0].type === 'checkbox') {
                userAnswers[questionName] = [];
                for (const answer of selectedAnswer) {
                    if (answer.checked) {
                        userAnswers[questionName].push(answer.value);
                    }
                }
                if (userAnswers[questionName].length === 0) {
                    alert('Please answer all questions.');
                    return;
                }
            }
        }

        // Check answers
        let score = 0;
        for (const question in userAnswers) {
            if (Array.isArray(userAnswers[question])) {
                // For checkbox questions
                if (correctAnswers[question].length === userAnswers[question].length &&
                    correctAnswers[question].every(value => userAnswers[question].includes(value))) {
                    score++;
                }
            } else if (userAnswers[question].toLowerCase() === correctAnswers[question].toLowerCase()) {
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
