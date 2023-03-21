var Collapse = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < Collapse.length; i++) {
  Collapse[i].addEventListener("click", function() {
    this.classList.toggle("active");

    //shuts all the other tabs when another is opened
    var activities = document.querySelectorAll('div.activity')
    activities.forEach((activity) => {
    	activity.style.display = "none"
    })
    
    var activity = this.nextElementSibling;
    if (activity.style.display === "block") {
      activity.style.display = "none";
    } else {
      activity.style.display = "block";
    }
  });
}

function show_craft() {
    document.getElementById('water-bottle')
            .style.display = "block";
    document.getElementById('button-craft')
            .style.display = "none";
}

function show_cooking_growing() {
  document.getElementById('cucumber')
    .style.display = "block";
  document.getElementById('button_cooking_growing')
    .style.display = "none";
  document.getElementById('strawb')
    .style.display = "block";
  document.getElementById('button_cooking_growing')
    .style.display = "none";
  document.getElementById('pasta')
    .style.display = "block";
  document.getElementById('button_cooking_growing')
    .style.display = "none";
  
} 
