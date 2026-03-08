/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
function showMessage(){
    alert("Chúc em ngày 8/3 thật vui vẻ và nhiều niềm vui ❤️");
}
function createFlower(){
    let flower=document.createElement("div");
    flower.innerHTML="🌸";
    flower.className="flower";
    flower.style.left=Math.random()*100+"vw";
    document.body.appendChild(flower);
    setTimeout(()=>{
        flower.remove();
    },6000);
}
setInterval(createFlower,500);
