const play = document.getElementById('btn-lottie');

const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets4.lottiefiles.com/packages/lf20_rc5d0f61.json'
});

play.addEventListener('click', () => {
    animItem.goToAndPlay(0, true);
})