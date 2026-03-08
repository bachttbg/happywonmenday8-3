/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
setInterval(function(){
    var heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.color = "red";
    heart.style.fontSize = "28px";
    document.body.appendChild(heart);
    setTimeout(function(){
        heart.remove();
    }, 5000);
}, 500);