document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab_block a');
    const contentBlocks = {
        about_myself: document.querySelector('.about_block'),
        about_statistic: document.querySelector('.statistic_block'),
        about_presentation: document.querySelector('.presentation_block'),
    };

    // Hide all blocks except the first one by default
    Object.values(contentBlocks).forEach((block, index) => {
        block.style.display = index === 0 ? 'block' : 'none';
    });

    tabLinks.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all tabs
            tabLinks.forEach(link => link.classList.remove('active'));
            // Add active class to the clicked tab
            tab.classList.add('active');

            // Hide all content blocks
            Object.values(contentBlocks).forEach(block => block.style.display = 'none');
            // Show the corresponding content block
            const targetClass = tab.classList[0];
            contentBlocks[targetClass].style.display = 'block';
            // document.querySelector('.presentation_block').style.display = 'flex';
        });
    });
});