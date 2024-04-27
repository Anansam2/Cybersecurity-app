let points = 0;
let progress = 0;

function startLesson(lessonTitle) {
    if (lessonTitle === 'Cybersecurity Basics') {
        window.location.href = 'cyber/cyber.html';
    } else if (lessonTitle === 'Networking Essentials') {
        window.location.href = 'network/network.html';
    }
}

function completeLesson(lessonTitle) {
    if (lessonTitle === 'Cybersecurity Basics') {
        points += 20;
        progress += 10;
        document.getElementById('points').textContent = points;
        document.getElementById('progress').textContent = `${progress}%`;
    } else if (lessonTitle === 'Networking Essentials') {
        points += 30;
        progress += 15;
        document.getElementById('points').textContent = points;
        document.getElementById('progress').textContent = `${progress}%`;
    }
}
