window.addEventListener('keydown', function(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = this.document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) return; 
    audio.currentTime = 0
    audio.play()
    console.log(key)
    key.classList.add('playing')
})
function removeTransition(e){
    if (e.propertyName != 'transform') return;
    this.classList.remove("playing")
}
let keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener('transitionend', removeTransition))