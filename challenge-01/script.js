const keys = Array.from(document.querySelectorAll(".key"))
const keysLetter = Array.from(document.querySelectorAll(".key-letter"))

const playSound = keyPressed => {
    const KeyLetterElement = keysLetter.find(keyLetter => keyLetter.innerText.toLowerCase() == keyPressed)
    if(!KeyLetterElement) return
    const parentElement = KeyLetterElement.parentElement
    const sound = KeyLetterElement.nextElementSibling.innerText.toLowerCase()

    addActive(parentElement)
    const audio = new Audio('./sounds/' + sound + '.wav');
    audio.play();
}

const addActive = parentElement => parentElement.classList.add("active")

const removeActive = e => e.target.classList.remove('active')

keys.forEach(keyElement => keyElement.addEventListener('transitionend', removeActive))

window.addEventListener("keydown", (e) => playSound(e.key))