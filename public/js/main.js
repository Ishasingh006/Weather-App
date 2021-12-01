const submitBtn= document.getElementById('submitBtn');
const cname= document.getElementById("cname");
const scode= document.getElementById("scode");
const ccode= document.getElementById("ccode");
const temp=document.getElementById("temp");
const desc=document.getElementById("desc");
const img=document.getElementById("img");
const city=document.getElementById("city");

const getInfo= async(event)=>{
      event.preventDefault();
      let cnamev=cname.value;
      let scodev=scode.value;
      let ccodev=ccode.value;
       let url=`https://api.openweathermap.org/data/2.5/weather?q=${cnamev},${scodev},${ccodev}&appid=5d0d9b4988db271e63045ee6c48097cf`;
       /*let url=`https://api.openweathermap.org/data/2.5/weather?q=${cnamev}&units=metric&appid=ee27960cfca0b51d1eff6feaa821040f`;*/
       const response=await fetch(url);
       const data= await response.json();
       const arrData= [data];
       temp.innerText=arrData[0].main.temp;
       desc.innerText=arrData[0].weather[0].description;
       city.innerText=cnamev;
}
submitBtn.addEventListener('click', getInfo);
