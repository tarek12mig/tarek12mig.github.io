function addRow() {
    var table = document.getElementById("gradeTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = '<input type="text" class="form-control" placeholder="Course">';
    cell2.innerHTML = '<input type="number" class="form-control" placeholder="Grade" min="0" max="100">';
    cell3.innerHTML = '<input type="number" class="form-control" placeholder="Credit Hours" min="1">';
    cell4.innerHTML = '<span class="delete-row-btn" onclick="deleteRow(this)">&times;</span>';
}

function calculateGPA() {
    var table = document.getElementById("gradeTable");
    var totalGradePoints = 0;
    var totalCredits = 0;

    for (var i = 0, row; row = table.rows[i]; i++) {
        var grade = parseFloat(row.cells[1].getElementsByTagName("input")[0].value);
        var credits = parseFloat(row.cells[2].getElementsByTagName("input")[0].value);

        if (!isNaN(grade) && !isNaN(credits)) {
            totalGradePoints += (grade * credits);
            totalCredits += credits;
        }
    }

    var gpa = totalCredits > 0 ? (totalGradePoints / totalCredits) / 20 : 0;
    document.getElementById('gpaResult').innerText = gpa.toFixed(2);
}

function clearTable() {
    document.getElementById("gradeTable").innerHTML = "";
}

function deleteRow(element) {
    var row = element.parentElement.parentElement;
    row.parentNode.removeChild(row);
}

// Initialize with one row
addRow();