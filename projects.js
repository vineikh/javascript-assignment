
var addProject = (function() {
    var add = function() {
        if(document.projectForm.reportValidity()) {

            var main = document.getElementsByTagName('main')[0];
            var article = document.createElement('article');

            var projectTitle = document.createElement('h4');
            projectTitle.innerHTML = document.getElementById("title").value;
            article.appendChild(projectTitle);

            var projectDiv = document.createElement('div');

            var projectDescription = document.createElement('p');
            projectDescription.innerHTML = document.getElementById("description").value;
            projectDiv.appendChild(projectDescription);

            var projectTable = document.createElement('table');
            projectTable.classList.add('table');
            projectTable.classList.add('w-50');

            var row1 = projectTable.insertRow(-1);
            var cell11 = document.createElement('th');
            cell11.style.width = "10%"
            var cell12 = document.createElement('td');
            cell12.style.width = "40%"
            cell11.innerHTML = "Role";
            cell12.innerHTML = document.getElementById("role").value;
            row1.appendChild(cell11);
            row1.appendChild(cell12);


            var row2 = projectTable.insertRow(-1);
            var cell21 = document.createElement('th');
            cell21.style.width = "10%"
            var cell22 = document.createElement('td');
            cell22.style.width = "40%"
            cell21.innerHTML = "Duration";
            cell22.innerHTML = document.getElementById("dateFrom").value + " to " + document.getElementById("dateTo").value;
            row2.appendChild(cell21);
            row2.appendChild(cell22);

            var row3 = projectTable.insertRow(-1);
            var cell31 = document.createElement('th');
            cell31.style.width = "10%"
            var cell32 = document.createElement('td');
            cell32.style.width = "40%"
            cell31.innerHTML = "Technology";
            cell32.innerHTML = document.getElementById("technology").value;
            row3.appendChild(cell31);
            row3.appendChild(cell32);

            var row4 = projectTable.insertRow(-1);
            var cell41 = document.createElement('th');
            cell41.style.width = "10%"
            var cell42 = document.createElement('td');
            cell42.style.width = "40%"
            cell41.innerHTML = "Tools";
            cell42.innerHTML = document.getElementById("tools").value;
            row4.appendChild(cell41);
            row4.appendChild(cell42);

            var row5 = projectTable.insertRow(-1);
            var cell51 = document.createElement('th');
            cell51.style.width = "10%"
            var cell52 = document.createElement('td');
            cell52.style.width = "40%"
            cell51.innerHTML = "Location";
            cell52.innerHTML = document.getElementById("location").value;
            row5.appendChild(cell51);
            row5.appendChild(cell52);

            projectDiv.appendChild(projectTable);

            article.appendChild(projectDiv);
            main.appendChild(article);

            var hr = document.createElement('hr');
            main.appendChild(hr);

            document.projectForm.reset();
            document.getElementById("closeButton").click();
        }
    };
    return add;
})();