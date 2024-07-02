document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const projectContent = this.closest('.project-tray').querySelector('.project-content');
            const isVisible = projectContent.style.display === 'block';

            projectContent.style.display = isVisible ? 'none' : 'block';
            this.textContent = isVisible ? 'Expand' : 'Collapse';
        });
    });
});
