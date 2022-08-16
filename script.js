let grid = document.getElementById("grid");

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