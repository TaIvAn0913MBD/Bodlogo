const random = Math.random();
random1 = Math.ceil(random * 100) + 1;
console.log(random1);

let too = Number(prompt("ta odoo too taana ta neg too bichnuu"));
while ((too == random1) == false) {
  if (too == random1) {
    alert("Ta zuv taalaa");
  }
  if (too < random1) {
    alert("Taniii too heterhii baga baina");
    too = Number(prompt("ta buruu taasan ahiad neg too bichnuu"));
  }
  if (too > random1) {
    alert("Tanii too heterhii ih baina");
    too = Number(prompt("ta buruu taasan ahiad neg too bichnuu"));
  }
  if (too == random1) {
    alert("Ta zuv taalaa");
  }
}
