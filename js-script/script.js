/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio 
in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/


// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
{/* <div class="big-box"></div> */}

const elButton = document.querySelector('.btn');

elButton.addEventListener('click', function(){
    const elBigSquare = document.createElement("div");
    elBigSquare.classList.add('big-box');
    // console.log(elBigSquare);
    document.querySelector('.container').appendChild(elBigSquare);

    // genero 100 quadrati piu piccoli dentro il bigsquare
        // genro una funzione per creare i quadrati
    function generateSquare(content) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('box');
        newSquare.innerHTML = '<span>' + content + '</span>';
        return newSquare;
    }
        // uso la funzione dentro un ciclo per definire il numero di quadrati che voglio
    for ( let i = 0; i < 100; i++) {
        const square = generateSquare(i + 1)
        elBigSquare.appendChild(square);

        // Quando l'utente clicca su ogni cella....
        square.addEventListener('click', function(){
            // la cella cliccata si colora di azzurro
            square.classList.toggle('bg-info-subtle');
            // ed emetto un messaggio in console con il numero della cella cliccata.
            console.log(`Hai cliccato la cella numero: ${i + 1}`);
        });
    }
});