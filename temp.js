const socialHub = document.querySelector('.social-hub')
const socialButton = socialHub.querySelector('social-button')

function toggleActive(t) {
    t.classList.toggle(active)
    console.log(`clicked and toggled ${t})
}

socialButton.addEventListener('click', toggleActive(socialHub))