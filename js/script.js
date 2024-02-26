const initialScreen = document.getElementById('initial-screen')
const playScreen = document.getElementById('play-screen')

document.getElementById('play-now').addEventListener('click',() =>{
    initialScreen.classList.add('hide');
    playScreen.classList.remove('hidden');    
})


function randomAlphabetGenerator(){
    const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    let randomAlphabet = alphabetArray[Math.round(Math.random()*25)];
    document.getElementById('random-text').innerText = randomAlphabet;
    return randomAlphabet.toUpperCase()
}

let randomAlphabet = randomAlphabetGenerator()
let countScore = 0;

function matchingKey(randomAlphabet){
    let countLife = document.getElementById('life').innerText
    document.addEventListener('keyup',(event)=>{
        if (randomAlphabet === event.key.toUpperCase()){
            randomAlphabet = randomAlphabetGenerator()
            document.getElementById('score').innerText = ++countScore
        }
        else{
            countLife--
            document.getElementById('life').innerText = countLife
            if(countLife < 0){
                document.getElementById('modal-1').classList.remove('hide');
                playScreen.classList.add('invisible');
                document.getElementById('score-show').innerText = countScore;
                document.getElementById('go-back').addEventListener('click',()=>{
                    initialScreen.classList.remove('hide');
                    window.location.reload();
                })
            }
        }
    })
}
matchingKey(randomAlphabet)

