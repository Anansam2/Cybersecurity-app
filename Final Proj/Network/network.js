document.addEventListener("DOMContentLoaded", function() {
    const completeButtons = document.querySelectorAll(".complete-button");
    const pointsDisplay = document.getElementById("points");
    const progressDisplay = document.getElementById("progressPercentage");
    const totalModules = 6;
    let completedModules = 0;

    completeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const parentLi = button.parentElement;
            parentLi.classList.add("completed");
            button.disabled = true;
            completedModules++;
            updateProgress();
            unlockNextModule(parentLi); // Unlock the next module
        });
    });

    function updateProgress() {
        const progress = Math.floor((completedModules / totalModules) * 100);
        pointsDisplay.textContent = completedModules;
        progressDisplay.textContent = `${progress}%`;
    }

    function unlockNextModule(completedModuleLi) {
        const nextModuleLi = completedModuleLi.nextElementSibling;
        if (nextModuleLi) {
            const nextModuleAnchor = nextModuleLi.querySelector("a");
            nextModuleAnchor.classList.remove("locked");
        }
    }
});
