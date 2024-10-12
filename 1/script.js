let test = document.querySelector("h2").childNodes[0].textContent;
// console.log(test);

let test3= document.getElementById("item")
// console.log(test3);

// let test4 = document.getElementsById("btn")
// console.log(test4)
 
let test22=document.getElementById("btn")
console.log(test22)

document.getElementById("btn").addEventListener("click", function () {
  document.querySelector("h2").childNodes[0].textContent++;
 console.log(sum())

});

document.getElementsById("btn1").addEventListener("click", function () {
  document.querySelector("h2").childNodes[0].textContent--;
  console.log(sum());

});

var parentelen = document.getElementById("cart");
var childelen = document.getElementById("item1");

    let testrm = false;
//     function item() {


//   for (let i = 0; i < test4.length;i++)
// {

document.getElementById("btnrm").addEventListener("click", function () {
  parentelen.removeChild(childelen);


  // testrm = true;
  // document.getElementById("total").innerHTML = `$${somme(
  //   prc1,
  //   prc2,
  //   prc3,
  //   prc4,
  //   testrm
  // )}`;
  // return testrm;
});
// }
// }

let heart = document.getElementById("heart");
// console.log(heart);

document.getElementById("heart").addEventListener("click", function () {
    if (document.getElementById("heart").style.color == "red") { document.getElementById("heart").style.color = "black"; } 
    else {document.getElementById("heart").style.color = "red";}
});

// document.getElementById("heart").removeEventListener("click", function () {
//   document.getElementById("heart").style.color = "black";
// });

// document.getElementById("heart").addEventListener("click", function () {
//   document.getElementById("heart").style.color = "red"; // Change the color to red
//     document.getElementById("heart").removeEventListener("click", changeColor); // Remove the event listener
// });

// let prc1 = price(document.getElementById("price1").childNodes[0].textContent);

// let prc2 = price(document.getElementById("price2").childNodes[0].textContent);
// let prc3 = price(document.getElementById("price3").childNodes[0].textContent);
// let prc4 = price(document.getElementById("price4").childNodes[0].textContent);

// function price(a) {
//   let res = "";
//   b = String(a);
//   for (let i = 1; i < b.length; i++) {
//     res = res + b[i];
//   }
//   return Number(res);
// }

// let one = prc1 * document.getElementById("mult1").childNodes[0].textContent
// let two = prc2 * document.getElementById("mult2").childNodes[0].textContent;
// let three = prc3 * document.getElementById("mult3").childNodes[0].textContent;
// let four = prc4 * document.getElementById("mult4").childNodes[0].textContent;


// function somme(a, b, c, d, t) {
//   //   console.log(a);
//   console.log(t);
//   if (testrm) {
//     return b + c + d;
//   } else {
//     return (
//       a * document.getElementById("mult1").childNodes[0].textContent +
//       b * document.getElementById("mult2").childNodes[0].textContent +
//       c * document.getElementById("mult3").childNodes[0].textContent +
//       d * document.getElementById("mult4").childNodes[0].textContent
//     );
//   }
// }

// document.getElementById("total").innerHTML = `$${somme(
//   prc1,
//   prc2,
//   prc3,
//   prc4,
//   testrm
// )}`;

// console.log(somme(prc1, prc2, prc3, prc4));





let test1 = document.getElementsByClassName("price")
// console.log((test1))
let test2=document.getElementsByClassName("mult")[1].textContent
console.log((test2))



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
console.log(sum())




function price(a) {
  let res = "";
  b = String(a);
  for (let i = 1; i < b.length; i++) {
    res = res + b[i];
  }
  return Number(res);
}


 