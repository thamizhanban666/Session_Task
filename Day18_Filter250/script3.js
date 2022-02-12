let btn = document.getElementById("sub");
let filter = document.getElementById("filt");
let o = document.getElementById("output");
let arrobj = [];

btn.addEventListener("click",()=>{
   let name = document.getElementById("name").value;
   let s1 = document.getElementById("s1").value;
   let s2 = document.getElementById("s2").value;
   let s3 = document.getElementById("s3").value;
   let s4 = document.getElementById("s4").value;
   let s5 = document.getElementById("s5").value;

   let g = (total)=>{
      if(total>=450){ return "O"}    
      if(total>=400){ return "A+"}
      if(total>=350){ return "A"}
      if(total>=300){ return "B"}
      if(total>=250){ return "C"}
      if(total<250){ return "F"}
   }
   let total = +s1 + +s2 + +s3 + +s4 + +s5; 
   let avg = total / 5 ;
   let grade = g(total);

   

   let obj = {
      Name: name,
      Total:total,
      Average:avg,
      Grade:grade
   }
   arrobj.push(obj);
   document.getElementById('form').reset();

   console.log(arrobj);
})

filter.addEventListener("click",()=>{
   let filtArr = arrobj.filter((e)=> e["Total"]>=250)

   let pArr = [];
   for(let i=0;i<filtArr.length;i++){
      let p = `<br><br>Name : ${filtArr[i].Name}<br>Total : ${filtArr[i].Total}<br>Average : ${filtArr[i].Average}<br>Grade : ${filtArr[i].Grade}`
      pArr.push(p);
      console.log(filtArr[i].Name)
   }
   pArr.join("");
   o.innerHTML= `<strong><h3>Students who have secured marks above 250 :</h3>${pArr}<strong>`;  
})
