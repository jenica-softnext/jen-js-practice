// using function expression

const getDate = function () {
  const date = new Date();

  const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const day = date.getDate();
  const month = monthList[date.getMonth()];
  const year = date.getFullYear();
  const dateToday = `Today is ${month} ${day}, ${year}`;
  
  document.querySelector(".date-today").textContent = dateToday;
};
