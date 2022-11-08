const black=document.querySelector(".black");
const blue=document.querySelector(".blue");
const green=document.querySelector(".green");
const red=document.querySelector(".red");
const blackImg=document.querySelector(".speaker1");
const blueImg=document.querySelector(".speaker2");
const greenImg=document.querySelector(".speaker3");
const redImg=document.querySelector(".speaker4");

   black.addEventListener("click",function(){

       blackImg.style.display="block";
       blueImg.style.display="none";
       greenImg.style.display="none";
       redImg.style.display="none";

       this.style.border="1.5px solid #0f0";
       blue.style.border="none";
       green.style.border="none";
       red.style.border="none";
   });

   blue.addEventListener("click",function(){

       blueImg.style.display="block";
       blackImg.style.display="none";
       greenImg.style.display="none";
       redImg.style.display="none";

       
       this.style.border="1.5px solid #0f0";
       black.style.border="none";
       green.style.border="none";
       red.style.border="none";
   });

   green.addEventListener("click",function(){

       greenImg.style.display="block";
       blueImg.style.display="none";
       blackImg.style.display="none";
       redImg.style.display="none";

       this.style.border="1.5px solid #0f0";
       blue.style.border="none";
       black.style.border="none";
       red.style.border="none";
   });

   red.addEventListener("click",function(){
       
       redImg.style.display="block";
       blueImg.style.display="none";
       blackImg.style.display="none";
       greenImg.style.display="none";

       this.style.border="1.5px solid #0f0";
       blue.style.border="none";
       green.style.border="none";
       black.style.border="none";
   });
      

