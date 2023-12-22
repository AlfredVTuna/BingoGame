// JavaScript code to handle the bingo game


var bingoWords = [
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,
36,37,38,39,40,41,42,43,44,45,46,47,48,49,50  // all the way to 50
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
    for (var i = 0; i < 7; i++) {
        var row = document.createElement("tr");

        //set the first row to be the header with price, B, I, N, G, O

        for (var j = 0; j < 6; j++) {
            
            if(i==0 && j==1){
                
                var cell = document.createElement("td");
                cell.className = "bingo-row";
                cell.textContent = "B";
                row.appendChild(cell);
            }
            if(i==0 && j==2){
                var cell = document.createElement("td");
                cell.className = "bingo-row";
                cell.textContent = "I";
                row.appendChild(cell);
            }
            if(i==0 && j==3){
                var cell = document.createElement("td");
                cell.className = "bingo-row";
                cell.textContent = "N";
                row.appendChild(cell);
            }
            if(i==0 && j==4){
                var cell = document.createElement("td");
                cell.className = "bingo-row";
                cell.textContent = "G";
                row.appendChild(cell);
            }
            if(i==0 && j==5){
                var cell = document.createElement("td");
                cell.className = "bingo-row";
                cell.textContent = "O";
                row.appendChild(cell);
            }
            
            if(j==0){
                if(j==0 && i==1){
                var cell = document.createElement("td");
                cell.className = "bingo-row";
                cell.textContent = "Bild";
                row.appendChild(cell);
                }
                else if(j==0 && i==2){
                var cell = document.createElement("td");
                cell.className = "bingo-row";
                cell.textContent = "Pepparkaka";
                row.appendChild(cell);
                }
                else if(j==0 && i==3){
                var cell = document.createElement("td");
                cell.className = "bingo-row";
                cell.textContent = "Trofe";
                row.appendChild(cell);
                }
                    else if(j==0 && i==4){
                var cell = document.createElement("td");
                cell.className = "bingo-row";
                cell.textContent = "15min i bollhavet";
                row.appendChild(cell);
                }
                        
                else if(j==0 && i==5){
                var cell = document.createElement("td");
                cell.className = "bingo-row";
                cell.textContent = "Biljett till ecsape room";
                row.appendChild(cell);
                }
                else if(j==0 && i==6){
                var cell = document.createElement("td");
                cell.className = "bingo-row";
                cell.textContent = "Pepparkaka";
                row.appendChild(cell);
                }
            }
            if(i != 0 && j != 0){
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
        }

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

        for (var j = 1; j < cells.length; j++) {
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
// JavaScript code
// JavaScript code
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(snowflake);
  }
  
  function createSnowflakes() {
    const numSnowflakes = 50;
  
    for (let i = 0; i < numSnowflakes; i++) {
      createSnowflake();
    }
  }
  
  // Call the function to create snowflakes
  createSnowflakes();



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
