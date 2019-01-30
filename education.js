
var addEducation = (function() {
    var add = function() {
        if(document.educationForm.reportValidity()) {
            var educationTable = document.getElementById("educationTable")
            var currentRow = educationTable.insertRow(-1);

            var currentCell1 = currentRow.insertCell(-1);
            var currentCell2 = currentRow.insertCell(-1);
            var currentCell3 = currentRow.insertCell(-1);
            var currentCell4 = currentRow.insertCell(-1);

            currentCell1.innerHTML = document.getElementById("degree").value;
            currentCell2.innerHTML = document.getElementById("year").value;
            currentCell3.innerHTML = document.getElementById("institute").value;
            currentCell4.innerHTML = document.getElementById("specialization").value;

            document.educationForm.reset();
            $('#educationModal').modal('hide');
        }
    };
    return add;
})();