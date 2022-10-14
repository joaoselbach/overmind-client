const getElement = (...queries) => document.querySelector(...queries);

const open = getElement('.open-modal-button');
const close = getElement('.modal-btn')
const container = getElement('.modal-container');
const modal = getElement('.modal');
const play = document.getElementById('btn-lottie');
const activeModalClass = 'modal-show';

const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/success.json'
});

const openModal = () => {
    container.classList.add(activeModalClass);
    animItem.goToAndPlay(0, true);
}

const closeModal = () => {
    container.classList.remove(activeModalClass);
}

close.addEventListener('click', closeModal)

container.addEventListener('click', (event) => {
    if (modal.contains(event.target)) return;

    closeModal();
});
