const panel = document.querySelectorAll('.panel');

panel.forEach( panel => {
    panel.addEventListener('click', () => {
        removeActiveClase();
        panel.classList.add('active');
    });
});

const removeActiveClase = () => {
    panel.forEach( panel => {
        panel.classList.remove('active');
    });
};