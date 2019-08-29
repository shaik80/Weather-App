let now = new Date();
let day = now.getDay();
let dayword = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let h = now.getHours();
let m =now.getMinutes();
let session ="AM"


if(h == 0){
    h = 12;
  }
  if(h > 12){
    h = h - 12;
    session = "PM";
  }
  let date = h+":"+m
  // setInterval(date,1000)
document.getElementById("daytime").innerHTML = dayword[day] +" "+ date +" "+ session; 
getdatacel();
function getdatacel(){
  let val =[
    {city:"Bangalore",celsius:"10",info:"partly Clould",img:"⛅"},
    {city:"Delhi",celsius:"20",info:"Sunny",img:"☀️"},
    {city:"Mumbai",celsius:"30",info:"Rain",img:"🌧️"}
  ];
  let a = document.getElementById("city").value;
  let b = document.getElementById("displaycity");
  let c = document.getElementById("celsius");
  let output = val.filter(v => (v.city == a))
                  .map(v=> { document.getElementById("displaycity").innerHTML = v.city,
                  document.getElementById("celsius").innerHTML = v.celsius,
                  document.getElementById("info").innerHTML = v.info,
                  document.getElementById("emoji").innerHTML = v.img})
                  document.getElementById('C').classList.add("active");
                  document.getElementById('C').style.pointerEvents = "none";
  console.log(output)      
  }

  function convert(degree) {
    let x;
    if (degree == 'C') {
      x = (document.getElementById("celsius").innerHTML * 9 / 5) + 32;
      document.getElementById("celsius").innerHTML = Math.round(x);
      document.getElementById('C').classList.add("active");
      document.getElementById('F').classList.remove("active");
      document.getElementById('C').style.pointerEvents = "none";
      document.getElementById('F').style.pointerEvents = "auto";
      console.log(x);
    } 
    else {
      x = (document.getElementById("celsius").innerHTML-32)  * 5 / 9;
      document.getElementById("celsius").innerHTML = Math.round(x);
      document.getElementById('F').classList.add("active");
      document.getElementById('C').classList.remove("active");
      document.getElementById('F').style.pointerEvents = "none";
      document.getElementById('C').style.pointerEvents = "auto";
      console.log(x);
    }
  }