const input = document.querySelector("#text-feild")
const play = document.querySelector(".fa-play")
const volume = document.querySelector(".fa-volume-high")
const forwrad = document.querySelector(".fa-forward")
const backward = document.querySelector(".fa-backward")

const synth = window.speechSynthesis;

if (synth) {

    
    play.addEventListener("click",speak)
    function speak(){
        let inputValue = input.value;
        let utterance = new SpeechSynthesisUtterance(inputValue)
        utterance.lang = "en-US"
        utterance.text = inputValue
        utterance.volume = "1"
        utterance.pitch = "1"
        utterance.rate = "1"
        utterance.voice = synth.speak(utterance)
        // synth.speak(utterance)

    }


} else {
    alert("Browser does not support text to speech, try a different browser")
}