var div = document.getElementById("firstdiv");

div.innerHTML = "<b> <p style = 'margin-top: 10px' > Coding Quiz Challenge</b> </p> <br>  Try to answer the following code-relatd questions within the time limit <br> <p style = 'margin-top: 10px'> Keep in mind that incorrect answers will penalize your score time by ten seconds </p>"; 
const btn = document.createElement("button");

btn.innerHTML = "Start Quiz";
btn.style.cursor = "pointer";

btn.style.marginleft = "100%";


btn.addEventListener("click", function() {

var textonClick = "<b>Commonly used data types DO NOT include : </b> <br> <br> <p style = 'border: 10px solid teal; background-color: teal; border-radius: 1em'> 1. strings </p> <br><br> <p style = 'border: 10px solid teal; background-color: teal; border-radius: 1em'> 2. booleans </p> <br><br> <p style = 'border: 10px solid teal; background-color: teal; border-radius: 1em'> 3. alerts </p> <br><br> <p style = 'border: 10px solid teal; background-color: teal; border-radius: 1em'> 4. numbers "

div.innerHTML = textonClick;

})

document.body.appendChild(btn);

