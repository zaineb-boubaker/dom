let plusbutton = document.getElementsByClassName("fa-solid fa-plus fa-xl");
let moinbutton = document.getElementsByClassName("fa-solid fa-minus fa-xl");
let btnrm = document.getElementsByClassName("btnrm");
// console.log(btnrm);
let parentelem = document.getElementById("cart");
let childelem = document.getElementsByClassName("item");
// console.log(parentelem)
// console.log(childelem);
let heart = document.getElementsByClassName("far fa-heart");
// console.log(heart);
let test1 = document.getElementsByClassName("price");
// let total=document.getElementById("total").childNodes[1].textContent
// console.log(total);
console.log(cart);
console.log(plusbutton);

document.getElementById("total").innerHTML = `$${sum()}`;
let mult = document.getElementsByClassName("mult");
// console.log(mult)
// console.log(plusbutton);

for (let elt of plusbutton) {
  elt.addEventListener("click", function () {
    elt.nextElementSibling.textContent++;
    console.log(sum());
    document.getElementById("total").innerHTML = `$${sum()}`;
  });
}

 for (let elt of moinbutton) {
  elt.addEventListener("click", function () {
   elt.previousElementSibling.textContent--;
    console.log(sum());
    document.getElementById("total").innerHTML = `$${sum()}`;
  });
}

for (let elt of btnrm) {
 elt.addEventListener("click", function () {
    elt.parentElement.remove()
    document.getElementById("total").innerHTML = `$${sum()}`;
  });
}


 for (let elt of heart) {
   elt.addEventListener("click", function () {
    elt.classList.toggle("toggleheart")
   });
 }









function price(a) {
  let res = "";
  b = String(a);
  for (let i = 1; i < b.length; i++) {
    res = res + b[i];
  }
  return Number(res);
}

function sum() {
  let pr = 0;
  for (let i = 0; i < test1.length; i++) {
    pr =
      pr +
      price(test1[i].textContent) *
        document.getElementsByClassName("mult")[i].textContent;
  }
  return pr;
}
console.log(sum());
