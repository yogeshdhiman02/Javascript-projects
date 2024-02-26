const buttons = document.querySelectorAll('.buttons');
const mainSection = document.querySelector('.content-container');
const hexCodeDisplayed = document.querySelector('.hexcode-text');

let randomColor = function(){
    const hexText = '1234567890ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hexText[Math.floor(Math.random() * 16)];
    }
    return color;
}
buttons.forEach(function(value){
    value.addEventListener('click',(obj) => {
        if(obj.target.textContent === 'Reset'){
            resetDisplay();
        }
        else if(obj.target.textContent === 'Click'){
            textDisplay();
        }
    }, false);
});

function resetDisplay(){
    mainSection.style.backgroundColor = '#ffffff';
    hexCodeDisplayed.innerHTML = '#FFFFFF';
}
function textDisplay(){
    mainSection.style.backgroundColor = `${randomColor()}`;
    mainSection.style.transition = `background-color 0.3s ease-in-out`;
    hexCodeDisplayed.innerHTML = `${randomColor()}`;
}

