// Function to add a new row to the table for inputting course details
function addRow() {
    // Access the table element by its ID
    var table = document.getElementById("gradeTable");
    // Insert a new row at the end of the table
    var row = table.insertRow();
    // Insert a new cell for the course name at the first position
    var cell1 = row.insertCell(0);
    // Insert a new cell for the grade at the second position
    var cell2 = row.insertCell(1);
    // Insert a new cell for the credit hours at the third position
    var cell3 = row.insertCell(2);
    // Insert a new cell for the delete button at the fourth position
    var cell4 = row.insertCell(3);

    // Populate the first cell with an input field for the course name
    cell1.innerHTML = '<input type="text" class="form-control" placeholder="Course">';
    // Populate the second cell with an input field for the grade
    cell2.innerHTML = '<input type="number" class="form-control" placeholder="Grade" min="0" max="100">';
    // Populate the third cell with an input field for the credit hours
    cell3.innerHTML = '<input type="number" class="form-control" placeholder="Credit Hours" min="1">';
    // Populate the fourth cell with a span element that has a delete button (×) and an onclick event that calls deleteRow function
    cell4.innerHTML = '<span class="delete-row-btn" onclick="deleteRow(this)">&times;</span>';
}

// Function to calculate the GPA based on grades and credit hours entered
function calculateGPA() {
    // Access the table element by its ID
    var table = document.getElementById("gradeTable");
    // Initialize a variable to keep the sum of all grade points
    var totalGradePoints = 0;
    // Initialize a variable to keep the sum of all credit hours
    var totalCredits = 0;

    // Loop through each row of the table
    for (var i = 0, row; row = table.rows[i]; i++) {
        // Extract the grade value from the input field in the second cell and convert it to a float
        var grade = parseFloat(row.cells[1].getElementsByTagName("input")[0].value);
        // Extract the credit hours value from the input field in the third cell and convert it to a float
        var credits = parseFloat(row.cells[2].getElementsByTagName("input")[0].value);

        // Check if the grade and credits are not NaN (i.e., are valid numbers)
        if (!isNaN(grade) && !isNaN(credits)) {
            // Multiply the grade by credits and add to total grade points
            totalGradePoints += (grade * credits);
            // Add the credits to total credits
            totalCredits += credits;
        }
    }

    // Calculate the GPA: (total grade points divided by total credits) divided by 20
    var gpa = totalCredits > 0 ? (totalGradePoints / totalCredits) / 20 : 0;
    // Display the calculated GPA in the element with the ID 'gpaResult', formatted to two decimal places
    document.getElementById('gpaResult').innerText = gpa.toFixed(2);
}

// Function to clear all rows from the table
function clearTable() {
    // Set the inner HTML of the table with ID "gradeTable" to an empty string, removing all its rows
    document.getElementById("gradeTable").innerHTML = "";
}

// Function to delete a specific row from the table
function deleteRow(element) {
    // Access the parent element of the parent (the row) of the clicked delete button
    var row = element.parentElement.parentElement;
    // Remove the row from the table (its parent element)
    row.parentNode.removeChild(row);
}

// Call the `addRow` function to add an initial row to the table when the script loads
addRow();
