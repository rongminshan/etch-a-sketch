let grid = document.getElementById("grid");
let randomColor = document.getElementById("randomcolor");
let blackColor = document.getElementById("blackcolor");

for(i = 0; i < 256; i++)
{
    let cells = document.createElement("div");
    grid.appendChild(cells);
    cells.classList.add("cell")

}
makeBlack();

let numInput = document.getElementById("numInput");
numInput.addEventListener("input", (e) => {
    if(e.target.value > 100) {
        alert("You entered a number over 100! Please enter a number from 1-100");
        e.preventDefault();
    }
    else {
        let gridArea = e.target.value ** 2;
        console.log(gridArea)
        grid.innerHTML = "";
        for(let i = 0; i < gridArea; i++)
        {
            let cells = document.createElement("div");
            grid.appendChild(cells);
            cells.classList.add("cell");
        }
        grid.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${e.target.value}, 1fr)`
    }
    if(blackColor.classList.contains("toggle")) makeBlack();
    if(randomColor.classList.contains("toggle")) makeColor();
});

randomColor.addEventListener("click", () => {
    randomColor.classList.add("toggle");
    blackColor.classList.remove("toggle");
    makeColor();
})

blackColor.addEventListener("click", () => {
    blackColor.classList.add("toggle");
    randomColor.classList.remove("toggle")
    makeBlack();
});

function makeBlack() {
    let item = document.querySelectorAll(".cell");
    item.forEach(cell => {
        cell.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
        });
})
}

function makeColor() {
    let item = document.querySelectorAll(".cell");
    item.forEach(cell => {
        cell.addEventListener("mouseover", (e) => {
            let color = getRandomColor();
            e.target.style.backgroundColor = color;
        });
    });
}

function getRandomColor() {
    let string = "#";
    let chars = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for(let i = 0; i < 6; i++) {
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    return string;  
}