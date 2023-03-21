/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//variabili / array 
let numGen = [];
let messageNum = document.getElementById('numGen');


let btn = document.getElementById('formPush');
btn.addEventListener('click', (e)=>{
    e.preventDefault()




});




// function per generare numeri casuali
function getRandomInt(max){
    return Math.floor((Math.random() * max) + 1);
 }

 //generiamo un array di 5 num casuali 
 function num(){
    setTimeout(() => {
        numGen = [];
        while(numGen.length < 5){
            let randomNum = getRandomInt(5);
            if(!numGen.includes(randomNum))
            numGen.push(randomNum);
        }
        messageNum.innerText = numGen;
        console.log(messageNum);
        console.log(numGen);    
    
     }, 3000);
 }

 num();