const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1; // January is 0!
const year = today.getFullYear();

const todayDate = `${year}-${month}-${day}`;
console.log(todayDate);
