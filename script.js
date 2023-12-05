// JavaScript code to handle the bingo game


var bingoWords = [
    "Mård", "Tumlare", "Grävling", "Kråka", "Ekorre",
    "Säl", "Kungsörn", "Räv", "Ekoxe", "Myror",
    "Rådjur", "Myrlejon", "Hummer", "Törnskata", "Musen", "Huggorm", "Fjäril", "Fisk",
    "Sjöstjärna", "Hare", "Spindel", "Bäver", "Kungsfiskaren", "Strandpadda", "Gädda", "Havsöring",


    // Add more words as needed
];


function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}








function generateBingoBoard() {
    shuffle(bingoWords);
    var board = document.getElementById("bingo-board");
    board.innerHTML = "";


    var table = document.createElement("table");
    for (var i = 0; i < 5; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 5; j++) {
            var cell = document.createElement("td");
            cell.className = "bingo-cell";
            var word = bingoWords[i * 5 + j];


            if (word) {
                if (word !== "N/A") {
                    var fontSize = 30 - word.length;
                    cell.style.fontSize = fontSize + "px";
                }
                cell.textContent = word;
            } else {
                cell.textContent = "N/A";
            }


            cell.addEventListener("click", function () {
                this.classList.toggle("clicked");
                checkWinningRow();
            });


            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    board.appendChild(table);
}


document.getElementById("start-button").addEventListener("click", function () {
    generateBingoBoard();


    var startButton = document.getElementById("start-button");
    startButton.style.display = "none";
});


function checkWinningRow() {
    var table = document.querySelector("table");
    var rows = table.getElementsByTagName("tr");
    var winningRow = null;


    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var isWinningRow = true;


        for (var j = 0; j < cells.length; j++) {
            if (!cells[j].classList.contains("clicked")) {
                isWinningRow = false;
                break;
            }
        }


        if (isWinningRow) {
            winningRow = rows[i];
            break;
        }
    }


    if (winningRow) {
        applyWinningEffects(winningRow);
    }
}


function applyWinningEffects(row) {
    // Add a class to the winning row
    row.classList.add("winning-row");


    // Set background color explicitly to gold
    row.style.backgroundColor = "gold";


    // Display modal with "BINGO" for 3 seconds
    var overlay = document.getElementById("overlay");
    var modal = document.getElementById("bingo-modal");


    overlay.style.display = "block";
    modal.style.display = "block";


    if (modal) {
        setTimeout(function () {
            modal.style.display = "none";
            overlay.style.display = "none";
            // Reset styles for the winning row
            row.classList.remove("winning-row");
            row.style.backgroundColor = ""; // Reset background color
        }, 3000);
    }
}