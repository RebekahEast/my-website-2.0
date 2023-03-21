var form = document.getElementById("comments");

form.addEventListener('submit', function(event){ 
    event.preventDefault(); 
    var submitted_comment = document.getElementById("words").value;
    var submitted_name = document.getElementById("name").value;
    var submitted_email = document.getElementById("email").value;
    let responses = document.getElementById("responses");
    let display_comment = document.createElement("p");
    
    console.log(display_comment);
    // console.log(submitted_comment);
    // console.log(submitted_email);
    // console.log(submitted_name);

    display_comment.innerHTML = "<b>Name: </b>" + submitted_name + "<br />" + "<b> Email: </b>" + submitted_email + "<br />" + "<br />" + "<b>Comment: </b>" + submitted_comment + "<hr>" //concatenating
    responses.appendChild(display_comment);

    event.target.reset() //resets the form after submitting
})

function countChars(obj){
    var maxlength = 140;
    var stdlength = obj.value.length;
    var overlength = (maxlength - stdlength);    
    if (overlength < 0) {
        document.getElementById('charNum').innerHTML = '<span style = "color:red; font-weight:bold;"> You are over the word count of ' + maxlength + ' characters by ' + -overlength + '. </span>';
        document.getElementById("send").disabled = true;
        document.getElementById("words").style.borderColor = "red";
    }
    if (overlength > 0)  {
        document.getElementById('charNum').innerHTML = stdlength + ' out of ' + maxlength + ' characters';
        document.getElementById("words").enabled = true; //this doesn't work??? currently it won't let you submit if you type over the word count and then go back
        document.getElementById("words").style.borderColor = "grey";
    }
}