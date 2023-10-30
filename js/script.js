//Impostiamo come variabili globali i dati che dovrebbero essere indispensabili per tutto il programma
const square = document.querySelector(".row");
console.log(square);

const btnStart = document.getElementById("start");
console.log(btnStart);

let clickedCells = 0;

let maxClicks;

let bombCell = [];

//Richiamiamo la funziona per creare la griglia
btnStart.addEventListener("click", makeGrid);

//Funzione per creare la nostra griglia
function makeGrid() {
    const options = document.getElementById("difficult");
    const difficult = options.selectedIndex;
    console.log(difficult);

    if (difficult === 1) {
        let max = 100;
        bombCell = generateBomb(max);
        console.log(bombCell);

        for (let i = 0; i < max; i++) {
            let number = i + 1;

            //Richiamiamo la funzione per la creazione della griglia
            const cell = generateCell100(number);
            //Richiamiamo la funzione che si occuperà di colorare la casella al click
            cell.addEventListener("click", cellCheck);

            square.append(cell);
        }

    } else if (difficult === 2) {
        let max = 81;
        bombCell = generateBomb(max);
        console.log(bombCell);

        for (let i = 0; i < max; i++) {
            number = i + 1;

            //Richiamiamo la funzione per la creazione della griglia
            const cell = generateCell81(number);
            //Richiamiamo la funzione che si occuperà di colorare la casella al click
            cell.addEventListener("click", cellCheck);

            square.append(cell);
        }

    } else if (difficult === 3) {
        let max = 49;
        bombCell = generateBomb(max);
        console.log(bombCell);

        for (let i = 0; i < max; i++) {
            number = i + 1;

            //Richiamiamo la funzione per la creazione della griglia
            const cell = generateCell49(number);
            //Richiamiamo la funzione che si occuperà di colorare la casella al click
            cell.addEventListener("click", cellCheck);

            square.append(cell);
        }

    }

};

//Funzioni per creare i tipi di celle
function generateCell100(number) {
    const newCell = document.createElement("button");
    newCell.classList.add("ms_square-100");
    newCell.innerHTML = number;
    return newCell;
}

function generateCell81(number) {
    const newCell = document.createElement("button");
    newCell.classList.add("ms_square-81");
    newCell.innerHTML = number;
    return newCell;
}

function generateCell49(number) {
    const newCell = document.createElement("button");
    newCell.classList.add("ms_square-49");
    newCell.innerHTML = number;
    return newCell;
}

//Funzione che colora le celle cliccate
function cellCheck() {
    if (bombCell.includes(parseInt(this.innerText))) {
        this.classList.add("ms_bg-red");
    } else {
        this.classList.add("ms_bg-light");
        clickedCells++;
    };
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateBomb(max) {
    const bombArray = [];
    while (bombArray.length < 16) {
        const randomNumber = getRndInteger(1, max)
        if (!bombArray.includes(randomNumber)) {
            bombArray.push(randomNumber);
        }
    }
    return bombArray
}