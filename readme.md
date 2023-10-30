## Esercizio

**Consegna:**
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

**Dati:**
1. L'utente dovrà selezionare la difficoltà alla quale vorrà giocare.

**Procedimento:**
1. Creiamo un header in modo da poter inserire lo select per capire dall'utente a che difficoltà vorrà giocare.
2. Impostiamo tramite classi html come dovrà apparire verosimilmente la nostra griglia completa.
3. Dichiariamo come variabili globali il tipo di select scelto dall'utente e il bottone che farà partire la creazione della griglia
4. Impostiamo al click sul bottone la chiamata alla funzione che si occupa della creazione della griglia.
5. Controlliamo la difficolta scelta per comprendere il numero di celle da creare.
6. Inoltre inseriamo in ogni singola cella la possibilita che ogni volta che venga cliccata cambi colore e appaia in console il numero all'interno di essa.