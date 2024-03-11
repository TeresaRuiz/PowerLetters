
document.addEventListener('DOMContentLoaded', function () {
    const openPopupButtons = document.querySelectorAll('.open-popup');
    const closePopupButtons = document.querySelectorAll('.close-popup');
    const popups = document.querySelectorAll('.popup');

    openPopupButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popupId = button.dataset.popupTarget;
            const popup = document.getElementById(popupId);
            popup.style.display = 'block';
        });
    });

    closePopupButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.closest('.popup');
            popup.style.display = 'none';
        });
    });

    popups.forEach(popup => {
        popup.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    });
    

});
function abrirVentana() {
    window.open('pedidos.html', '_blank');
}