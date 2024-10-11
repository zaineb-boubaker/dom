let btn = document.getElementById("btn")

let hrt = document.querySelector(".heart-border");
let test = document.querySelector(".heart-border");
// console.log(test);
// let heart = document.getElementsByClassName("fa-heart")[0].style.Color;

console.log(heart);
// console.log(g);
// console.log(b);


btn.addEventListener("click", function () {
    let r = Math.random() * 255;
let g = Math.random() * 255;
  let b = Math.random() * 255;
  
      hrt.style.backgroundColor = `rgb(${r},${g},${b})`;
    // hrt.style.borderColor = `rgb(${r},${g},${b})`;
    // document.documentElement.style.setProperty(
    //   "--heart-color",
    //   `rgb(${r},${g},${b})`
      
    // );
  btn.style.backgroundColor = `rgb(${r},${g},${b})`;
  //  heart.style.Color = `rgb(${r1},${g1},${b1})`;
    console.log("ok")
})




