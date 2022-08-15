// creating audio variables here

const kick = new Audio("DrumSounds/kick.wav")
const clap = new Audio("DrumSounds/clap.wav")
const hiHat = new Audio("DrumSounds/hihat.wav")
const openHat = new Audio("DrumSounds/openhat.wav")


const drum1 = document.getElementById("hihat")
const drum2 = document.getElementById("kick")
const drum3 = document.getElementById("clap")
const drum4 = document.getElementById("openhat")

//creating eventlistener to keydown, using a switchcase for each keybind.
window.addEventListener("keydown", (e) =>{
    switch (e.key){
        case 'a':

            playsounds(hiHat, drum1 )
         
            
            break;
        case 's':
            playsounds(clap, drum2)

            
            break;
        case 'd':
            playsounds(kick, drum3)
             

            break;
        case 'f':
            playsounds(openHat, drum4)
            

            break;
    }
    
})
// This plays the sounds refered to in the switchcase.


const playsounds = (sound, cont)=>{
    sound.play()
    cont.classList.add("playing")

    // here we set a timeout so the sound and the animation on buttons can "re-pressed"
    
    setTimeout(() => cont.classList.remove("playing"), 150)
        

}


