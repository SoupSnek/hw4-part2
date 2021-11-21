/**********************
Author: Al Sebastian Ferreras
The function that creates the whole table
**********************/
//Hides both divs since they are empty in the beginning
$('#tableZone').hide();
$('#tabs').hide();

function generateTable(){
    //Grab the elements we will populate
    tableDiv = document.getElementById('tableZone');
    tableDiv.removeChild(tableDiv.firstChild);
    
    //Get value and make it a number
    var minX = Number(document.getElementById("minx").value);
    
    var maxX = Number(document.getElementById("maxx").value);

    var minY = Number(document.getElementById("miny").value);

    var maxY = Number(document.getElementById("maxy").value);

    var table = document.createElement('table');
    table.id = minY + ' to ' + maxY + ' by ' + minX + ' to ' + maxX;
    
    //Create first row of the table
    var firstRow = document.createElement('tr');
    var blankSpot = document.createElement('td');

    //Makes the blank spot in table
    blankSpot.className = 'blankTD';
    firstRow.appendChild(blankSpot);
    
    //Populates the first row in table
    for(let col = minX; col <= maxX; col++)
    {
        let entry = document.createElement('td');
        entry.innerHTML = col;
        firstRow.appendChild(entry);
    }
    
    //Give row class for styling
    firstRow.className = 'firstRow';
    //Attach it
    table.appendChild(firstRow);
    
    //Creates the rest of the table
    for(let rNum = minY; rNum <= maxY; rNum++)
    {
        let row = document.createElement('tr');
        let entry = document.createElement('td');
        //Create first column and gives it class for styling
        entry.className = 'firstCol'
        entry.innerHTML = rNum;
        row.appendChild(entry);
        //Creates the multipled part of table
        for(let colNum = minX; colNum <= maxX; colNum++)
        {
            let mult = document.createElement('td');
            mult.innerHTML = (colNum*rNum);
            mult.className = 'mult';
            row.appendChild(mult);
        }
        row.className = 'trow';
        table.appendChild(row);
    }

    //Puts table in the div
    tableDiv.appendChild(table);
};