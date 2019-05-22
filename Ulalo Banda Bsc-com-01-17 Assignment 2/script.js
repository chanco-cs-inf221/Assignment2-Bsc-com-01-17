//Access to projects form
var getForm = document.getElementById("form1");
getForm.addEventListener("submit", function(event)
{
   event.preventDefault();
    //Retrieve input to form  by user
    var name = getForm.name.value;
    var details = getForm.details.value;
    var completionDate = new Date(getForm.date.value);
    //Storing project info to local storage
    var list1 = document.getElementById("plist");
    let project = ["Name: " + name, "\nDetails: " + details, "\nCompletion Date: " + completionDate];
    localStorage.setItem("1", project);

    var project = document.createElement("new");
    project.setAttribute("href", "  p.html");
    project.setAttribute("class","name");

    var projectNew = document.createTextNode(name);
    project.appendChild(projectNew);
    list1.appendChild(project);
    getForm.reset();
});3
 var getForm2 = document.getElementById("work")
getForm2.onsubmit = function(e)
{
  e.preventDefault();
   //Retrieve input to form  by user
   var name2 = getForm2.org-name.value;
   var details2 = getForm2.org-details.value;
   var dateWorked = new Date(getForm2.org-date.value);
   //Storing project info to local storage
   var list2 = document.getElementById("work");
   let workload = ["Organization name: " + name2, "\nWork Details: " + details2, "\nWhen : " +completionDate];
   localStorage.setItem("2", workload);

   var project = document.createElement("new");
   workstuff.setAttribute("href", "  WorkExperienceDisplay.html");
   workstuff.setAttribute("class","name");

   var workdetails = document.createTextNode(name2);
   workli.appendChild(workdetails);
   worklist.appendChild(workli);
   getForm2.reset();
}

