
var addExperience = (function() {
    var add = function() {
        if(document.experienceForm.reportValidity()) {
            var experienceTable = document.getElementById("experienceTable")
            var currentRow = experienceTable.insertRow(-1);

            var currentCell1 = currentRow.insertCell(-1);
            var currentCell2 = currentRow.insertCell(-1);
            var currentCell3 = currentRow.insertCell(-1);

            currentCell1.innerHTML = document.getElementById("dateFrom").value + " to " + document.getElementById("dateTo").value;
            currentCell2.innerHTML = document.getElementById("organization").value;
            currentCell3.innerHTML = document.getElementById("role").value;

            document.experienceForm.reset();
            document.getElementById("closeButton").click();
        }
    };
    return add;
})();