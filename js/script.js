/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//variabili / array 
let numGen = [];
let messageNum = document.getElementById('numGen');

// function per generare numeri casuali
function getRandomInt(max){
    return Math.floor((Math.random() * max) + 1);
 }

//generiamo un array di 5 num casuali 
function num(){
    setTimeout(() => {
        numGen = [];
        while(numGen.length < 5){
            let randomNum = getRandomInt(100);
            if(!numGen.includes(randomNum))
            numGen.push(randomNum);
        }
        messageNum.innerText = numGen;
        console.log(numGen);    
    
    }, 3000);
}
num();

//inizio countdown num
function startCountdown(seconds) {
    let counter = seconds;
      
    const interval = setInterval(() => {
      console.log(counter);
      counter--;
        
      if (counter < 1 ) {
        messageNum.innerText = 'Inserisci i numeri';
        clearInterval(interval);
        console.log('Finish');
      }
    }, 1000);
}
startCountdown(8)

//verifica se i numeri nseriti in input sono = numGen []
let btn = document.getElementById('formPush');
btn.addEventListener('submit', (e)=>{
    e.preventDefault()
    messageNum.innerText = 'Ecco il tuo risultato:';
    let inputs = document.querySelectorAll('input');
    for(let i = 0; i < inputs.length; i++){
        let valueInput = inputs[i].value;
        if(parseInt(valueInput) == numGen[i]){
            messageNum.innerText += ` ${valueInput} corretto,`;
            console.log( parseInt(valueInput),'Complimenti !!!');

        } else if(parseInt(valueInput)  !== numGen[i]){
            messageNum.innerText += ` ${valueInput} errato,`;
            console.log(parseInt(valueInput),'Hai sbagliato :(');
        }
    }
    num();
    startCountdown(8)
    btn.reset();
});