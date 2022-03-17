let arr = [50,55,60,65,70];
let total = (a)=>{
  return new Promise((resolve)=>{
    let t = a.reduce((a,c)=> a+c ) ;
    resolve(t); 
   
  })
}
let avg = (a)=>{
  return new Promise((resolve)=>{
    let avg = total(arr).then((d)=>{
      return d/5 ;
   })
    resolve(avg); 
    
  })
}
 total(arr).then((d)=>{
    console.log(d);
 })
 avg(arr).then((d)=>{
  console.log(d);
})