document.addEventListener('DOMContentLoaded', function() {
    const continueButtons = document.querySelectorAll('.continue-btn');

    continueButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetIds = button.getAttribute('data-target').split(',');
            const arrowIds = button.getAttribute('data-arrow').split(',');

            targetIds.forEach(function(targetId, index) {
                const targetNode = document.getElementById(targetId);

                if (targetNode) {
                    targetNode.classList.add('visible');
                }

                const arrowId = arrowIds[index];
                const arrowNode = document.getElementById(arrowId);

                if (arrowNode) {
                    arrowNode.classList.add('visible');
                }
            });
        });
    });

    // Make the first node visible
    const firstNode = document.getElementById('node1');
    if (firstNode) {
        firstNode.classList.add('visible');
    }
});
