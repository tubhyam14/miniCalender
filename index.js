const data=new Date();
const yearEl=document.getElementById("year");
const monthEl=document.getElementById("month")
const dateEl=document.getElementById("day")
const dayNEl=document.getElementById("dayN")

const year=data.getFullYear();
const monthN=["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
const month=data.getMonth();
const date=data.getUTCDate()
const weekdays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const dayNo=data.getUTCDay()


yearEl.textContent=`${year}`
monthEl.textContent=`${monthN[month]}`
dateEl.textContent=`${date}`
dayNEl.textContent=`${weekdays[dayNo]}`




