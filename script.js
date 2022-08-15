let grid = document.getElementById("grid");
for(i = 0; i < 256; i++)
{
    let cells = document.createElement("div");
    grid.appendChild(cells);
    cells.classList.add("cell")

}

let item = document.querySelectorAll(".cell");
item.forEach(cell => {
    cell.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
    });
})