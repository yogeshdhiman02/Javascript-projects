const buttons = document.querySelectorAll('.buttons');
const number = document.querySelector('.number');
const increaseColor ="#208843";
const decreaseColor = "#e03131";
const resetColor = "#17181d";
const resetValue = 0;
buttons.forEach(btnCall);

let num = 0;
function btnCall(value){
    value.addEventListener('click', (e) => {
        if(e.target.id === 'decrease'){
            number.innerHTML = `${--num}`;
            playAudio();

            if(num < 0){
                number.style.color = `${decreaseColor}`;
            }
            else if(num == 0){
                number.style.color = `${resetColor}`;
            }
        }  
        else if(e.target.id === 'reset'){
            number.innerHTML = `${resetValue}`;            
            if(num > 0 || num < 0){
                playAudio();
            }
            num = 0;
            if(num == 0){
                number.style.color = `${resetColor}`;
            }
        }
        else if(e.target.id === 'increase'){
            number.innerHTML = `${++num}`;
            playAudio();
            if(num > 0){
                number.style.color = `${increaseColor}`;
            }
            else if(num == 0){
                number.style.color = `${resetColor}`;
            }
        }
    }, false);
}


const audio = new Audio('./sound/mixkit-game-balloon.wav');
function playAudio(){
    audio.play();
}
