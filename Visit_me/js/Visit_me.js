function close(){
    var elt=document.getElementById("sunday")
    elt.innerHTML=" ";

    document.getElementById("12").style.backgroundColor="#dfdada";
  }

function sunday_schedule(){
var color = document.getElementById("12").style.backgroundColor="#3295a8"

var schedule=document.getElementById("sunday").innerHTML=
        `
        <div class="card">
        <div class="card-body" style="background-color:#d5dadb">
        <h5 class="card-title">Sunday</h5>
        <p class="card-text">
            6:00AM - 7:30AM: Vitals <br>
            8:00AM - 9:00AM: Surgery <br>
            10:30AM - 1:00PM: Recovery <br>
            2:00PM - 2:30PM: Vitals <br>
            2:30PM - 6:00PM: Visiting Hours <br>
            6:00PM - 9:00PM: Supper
        </p>
        <img id="sunclose" src="img/close.png" alt="Close" height = "40"/>
        </div>
        </div>
        `
    document.getElementById("sunclose").addEventListener("click",close)
}


function mon_close(){
    var elt=document.getElementById("monday")
    elt.innerHTML=" ";

    document.getElementById("13").style.backgroundColor="#dfdada";
  }

function monday_schedule(){
var color = document.getElementById("13").style.backgroundColor="#3295a8"

var schedule=document.getElementById("monday").innerHTML=
        `
        <div class="card">
        <div class="card-body" style="background-color:#d5dadb">
        <h5 class="card-title">Monday</h5>
        <p class="card-text">
            6:00AM - 7:30AM: Vitals <br>
            8:00AM - 9:00AM: Follow up Appointment <br>
            10:30AM - 1:00PM: Lunch <br>
            2:00PM - 2:30PM: Vitals <br>
            2:30PM - 6:00PM: Visiting Hours <br>
            6:00PM - 9:00PM: Supper
        </p>
        <img id="monclose" src="img/close.png" alt="Close" height = "40"/>
        </div>
        </div>
        `
    document.getElementById("monclose").addEventListener("click",mon_close)
}


function tu_close(){
    var elt=document.getElementById("tuesday")
    elt.innerHTML=" ";

    document.getElementById("14").style.backgroundColor="#dfdada";
  }

function tuesday_schedule(){
var color = document.getElementById("14").style.backgroundColor="#3295a8"

var schedule=document.getElementById("tuesday").innerHTML=
        `
        <div class="card">
        <div class="card-body" style="background-color:#d5dadb">
        <h5 class="card-title">Tuesday</h5>
        <p class="card-text">
            6:00AM - 7:30AM: Vitals <br>
            8:00AM - 9:00AM: Breakfast <br>
            12:30PM - 1:00PM: Lunch <br>
            2:00PM - 2:30PM: Vitals <br>
            2:30PM - 6:00PM: Visiting Hours <br>
            6:00PM - 9:00PM: Supper
        </p>
        <img id="tuclose" src="img/close.png" alt="Close" height = "40"/>
        </div>
        </div>
        `
    document.getElementById("tuclose").addEventListener("click",tu_close)
}


function wed_close(){
    var elt=document.getElementById("wednesday")
    elt.innerHTML=" ";

    document.getElementById("15").style.backgroundColor="#dfdada";
  }

function wednesday_schedule(){
var color = document.getElementById("15").style.backgroundColor="#3295a8"

var schedule=document.getElementById("wednesday").innerHTML=
        `
        <div class="card">
        <div class="card-body" style="background-color:#d5dadb">
        <h5 class="card-title">Wednesday</h5>
        <p class="card-text">
            6:00AM - 7:30AM: Vitals <br>
            8:00AM - 9:00AM: Breakfast <br>
            11:00AM - 11:30AM: Appointment with Specialist <br>
            12:30PM - 1:00PM: Lunch <br>
            2:00PM - 2:30PM: Vitals <br>
            2:30PM - 6:00PM: Visiting Hours <br>
            6:00PM - 9:00PM: Supper
        </p>
        <img id="wedclose" src="img/close.png" alt="Close" height = "40"/>
        </div>
        </div>
        `
    document.getElementById("wedclose").addEventListener("click",wed_close)
}


function thu_close(){
    var elt=document.getElementById("thursday")
    elt.innerHTML=" ";

    document.getElementById("16").style.backgroundColor="#dfdada";
  }

function thursday_schedule(){
var color = document.getElementById("16").style.backgroundColor="#3295a8"

var schedule=document.getElementById("thursday").innerHTML=
        `
        <div class="card">
        <div class="card-body" style="background-color:#d5dadb">
        <h5 class="card-title">Thursday</h5>
        <p class="card-text">
            6:00AM - 7:30AM: Vitals <br>
            8:00AM - 9:00AM: Breakfast <br>
            12:30PM - 1:00PM: Lunch <br>
            2:00PM - 2:30PM: Vitals <br>
            2:30PM - 6:00PM: Visiting Hours <br>
            6:00PM - 9:00PM: Supper
        </p>
        <img id="thuclose" src="img/close.png" alt="Close" height = "40"/>
        </div>
        </div>
        `
    document.getElementById("thuclose").addEventListener("click",thu_close)
}

function fri_close(){
    var elt=document.getElementById("friday")
    elt.innerHTML=" ";

    document.getElementById("17").style.backgroundColor="#dfdada";
  }

function friday_schedule(){
var color = document.getElementById("17").style.backgroundColor="#3295a8"

var schedule=document.getElementById("friday").innerHTML=
        `
        <div class="card">
        <div class="card-body" style="background-color:#d5dadb">
        <h5 class="card-title">Friday</h5>
        <p class="card-text">
            6:00AM - 7:30AM: Vitals <br>
            8:00AM - 9:00AM: Breakfast <br>
            12:30PM - 1:00PM: Lunch <br>
            2:00PM - 2:30PM: Vitals <br>
            2:30PM - 6:00PM: Visiting Hours <br>
            6:00PM - 9:00PM: Supper
        </p>
        <img id="friclose" src="img/close.png" alt="Close" height = "40"/>
        </div>
        </div>
        `
    document.getElementById("friclose").addEventListener("click",fri_close)
}

function sat_close(){
    var elt=document.getElementById("saturday")
    elt.innerHTML=" ";

    document.getElementById("18").style.backgroundColor="#dfdada";
  }

function saturday_schedule(){
var color = document.getElementById("18").style.backgroundColor="#3295a8"

var schedule=document.getElementById("saturday").innerHTML=
        `
        <div class="card">
        <div class="card-body" style="background-color:#d5dadb">
        <h5 class="card-title">Saturday</h5>
        <p class="card-text">
            6:00AM - 7:30AM: Vitals <br>
            8:00AM - 9:00AM: Discharge <br>
        </p>
        <img id="satclose" src="img/close.png" alt="Close" height = "40"/>
        </div>
        </div>
        `
    document.getElementById("satclose").addEventListener("click",sat_close)
}