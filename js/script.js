//Impostiamo come variabili globali i dati che dovrebbero essere indispensabili per tutto il programma
const square = document.querySelector(".row");
console.log(square);

const btnStart = document.getElementById("start");
console.log(btnStart);

let clickedCells = [];

let max;

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
        max = 100;
        bombCell = generateBomb(max);
        console.log(bombCell);
        square.innerHTML = "";

        for (let i = 0; i < max; i++) {
            let number = i + 1;

            //Richiamiamo la funzione per la creazione della griglia
            const cell = generateCell100(number);
            //Richiamiamo la funzione che si occuperà di colorare la casella al click
            cell.addEventListener("click", cellCheck);

            square.append(cell);
        }

    } else if (difficult === 2) {
        max = 81;
        bombCell = generateBomb(max);
        console.log(bombCell);

        square.innerHTML = "";

        for (let i = 0; i < max; i++) {
            number = i + 1;

            //Richiamiamo la funzione per la creazione della griglia
            const cell = generateCell81(number);
            //Richiamiamo la funzione che si occuperà di colorare la casella al click
            cell.addEventListener("click", cellCheck);

            square.append(cell);
        }

    } else if (difficult === 3) {
        max = 49;
        bombCell = generateBomb(max);
        console.log(bombCell);

        square.innerHTML = "";
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
    newCell.classList.add("cellSingle","ms_square-100");
    newCell.innerHTML = number;
    return newCell;
}

function generateCell81(number) {
    const newCell = document.createElement("button");
    newCell.classList.add("cellSingle","ms_square-81");
    newCell.innerHTML = number;
    return newCell;
}

function generateCell49(number) {
    const newCell = document.createElement("button");
    newCell.classList.add("cellSingle", "ms_square-49");
    newCell.innerHTML = number;
    return newCell;
}

//Funzione che controlla e verifica le celle cliccate
function cellCheck() {
    const clickedNumber = parseInt(this.innerText);
    if (bombCell.includes(clickedNumber)) {
        this.classList.add("ms_bg-red");
        endGame("loose");
    } else {
        this.classList.add("ms_bg-light");
        if(!clickedCells.includes(clickedNumber))
        {
            console.log("Conto questo numero");
            clickedCells.push(clickedNumber);
        }
        if(clickedCells.length === max)
        {
            endGame("win");
        }
    };
}

function endGame (result)
{
    const resultTitle = document.getElementById("result");
    resultTitle.innerHTML = "Il tuo punteggio e\' " + clickedCells.length;
    resultTitle.classList.remove("d-none");

    const allCells = document.querySelectorAll("cellSingle");
    for(let i = 0; i < allCells.length; i++)
    {
        const curCell = allCells[i];
        curCell.removeEventListener("click", cellCheck);
        //curCell.style.pointerEvents = "none";
    }

    if(result === "loose")
    {
        for(let i = 0; i < allCells.length; i++)
        {
            const curCell = allCells[i];
            const curNumber = parseInt(curCell.textContent);
            if(bombs.includes(curNumber))
            {
                curCell.classList.add("ms_bg-red");
            }
        }
        console.log("HAI PERSO!");
    } else
    {
        console.log("HAI VINTO!");
    }
    
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