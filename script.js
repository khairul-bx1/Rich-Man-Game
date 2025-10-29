

const tap = document.getElementById("tap");
const balance = document.getElementById("balance");
let currentBalance = 0;

tap.addEventListener("click", () => {
  let amount = 10;
  currentBalance += amount;
  balance.innerText = `$${currentBalance}`;
});
