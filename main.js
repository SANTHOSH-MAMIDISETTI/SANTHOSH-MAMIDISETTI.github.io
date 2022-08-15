let mydetails=["Student at Amrita","CSE-AIE","trying something new","Member @THE ROBOTICS CLUB","Member @The A.C.M","Member @ The Amrita Robotics Academy"];
let Greetingsentences = ["Good Morning","Good Afternoon","Good Evening"];
let i=1;


function Greeting(){
    let greet;
    let myDate = new Date();
    let hrs = myDate.getHours();

    if (hrs <= 12) {
        greet = Greetingsentences[0];
    }else if (hrs > 12 && hrs < 18) {
        greet = Greetingsentences[1];
    }else if (hrs <= 24){
        greet = Greetingsentences[2];
    }

    document.getElementById("lblGreetings").innerHTML ="<b>" + greet + "</b> thanks for heading over here!";
}


function toggleMode() {
    let BackgroundColor = document.body.style.backgroundColor;
    let image = document.getElementById("switch");
    document.body.classList.toggle("dark-mode");

    if (i%2==1){
        image.src = "/resources/toggleon.png";
        BackgroundColor = "rgb(153, 221, 153)";
    }else if (i%2==0){
        image.src = "/resources/toggleoff.png";
        BackgroundColor = "hsl(128, 53%, 19%)";
    }
    i+=1;         
}


function changeDescription(){
    let details = document.getElementById("my-details");
    let randomElement = mydetails[Math.floor(Math.random() * mydetails.length)];
    details.innerHTML=randomElement;
    
    setTimeout(() => { changeDescription(); }, 2000);
}


Greeting();
changeDescription();
