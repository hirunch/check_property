const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const dtime = document.getElementById("dtime");
const ntime = document.getElementById("ntime");
const sub = document.getElementById("sub");
const date = document.getElementById("date");
const time = document.getElementById("time");


sub.onclick = function(){

  if(monday.checked){

    date.textContent = "You Select Monday";

  }

  else if(tuesday.checked) {

    date.textContent = "you Select Tuesday";

  }
  else if(wednesday.checked) {

    date.textContent = "you Select Wednesday";
    
  }

  else if(thursday.checked) {

    date.textContent = "you Select Thursday";
    
  }

  else if(friday.checked) {

    date.textContent = "you Select Friday";
    
  }
  else {

    date.textContent = "you Not Selected In day";

  }

  if (dtime.checked){

    time.textContent = "you Select 01:00 p.m - 03:00 p.m";
  }

  else if(ntime.checked){

    time.textContent = "you Select  07:00 p.m - 09:00 p.m";

  }

  else {

    time.textContent = "you not select Time";
    
  }

}
