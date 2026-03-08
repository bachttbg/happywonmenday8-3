/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let images=[
    "iamges/img1.jpg",
    "iamges/img2.jpg",
    "iamges/img3.jpg",
    "iamges/img4.jpg",
    "iamges/img5.jpg",
    "iamges/img6.jpg"
];
let index=0;
function changeImage(){
    let img=document.getElementById("slide");
    if(img){
        img.src=images[index];
        img++;
        if(index>=images.length){
            index=0;
        }
    }
}
setInterval(changeImage,3000);





