const html = document.querySelector('html')
const checkbox = document.querySelector('#switch')

//Change the root class to light/dark mode
checkbox.addEventListener('change', function() {
    html.classList.toggle('light-mode')
}) 
