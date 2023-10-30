//Impostiamo come variabili globali i dati che dovrebbero essere indispensabili per tutto il programma


const square = document.querySelector(".row");
console.log(square);

const btnStart = document.getElementById("start");
console.log(btnStart);

//Richiamiamo la funziona per creare la griglia
btnStart.addEventListener("click", makeGrid);

//Funzione per creare la nostra griglia
function makeGrid()
{
    const options = document.getElementById("difficult");
    const difficult = options.selectedIndex;
    console.log(difficult);

    if(difficult === 1)
    {
        for(let i = 0; i < 100; i++)
        {
            let number = i + 1;

            //Richiamiamo la funzione per la creazione della griglia
            const cell = generateCell100(number);
            //Richiamiamo la funzione che si occuperà di colorare la casella al click
            cell.addEventListener("click", colorCell);

            square.append(cell);
        }

    } else if (difficult === 2)
    {
        for(let i = 0; i < 81; i++)
        {
            number = i + 1;

            //Richiamiamo la funzione per la creazione della griglia
            const cell = generateCell81(number);
            //Richiamiamo la funzione che si occuperà di colorare la casella al click
            cell.addEventListener("click", colorCell);

            square.append(cell);
        }

    } else if (difficult === 3)
    {
        for(let i = 0; i < 49; i++)
        {
            number = i + 1;

            //Richiamiamo la funzione per la creazione della griglia
            const cell = generateCell49(number);
            //Richiamiamo la funzione che si occuperà di colorare la casella al click
            cell.addEventListener("click", colorCell);

            square.append(cell);
        }

    }

};

//Funzioni per creare i tipi di celle
function generateCell100(number)
{
    const newCell = document.createElement("button");
    newCell.classList.add("ms_square-100");
    newCell.innerHTML = number;
    return newCell;
}

function generateCell81(number)
{
    const newCell = document.createElement("button");
    newCell.classList.add("ms_square-81");
    newCell.innerHTML = number;
    return newCell;
}

function generateCell49(number)
{
    const newCell = document.createElement("button");
    newCell.classList.add("ms_square-49");
    newCell.innerHTML = number;
    return newCell;
}

//Funzione che colora le celle cliccate
function colorCell()
{
   this.classList.add("ms_bg-light");
   console.log(this.innerText);
}