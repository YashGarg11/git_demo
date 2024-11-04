 async function orderFood(name,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("order for " +name+" prepared");
        },time)
    });
 }

 async function restaurant() {
    console.log("order placed");
    let pizza=await orderFood("pizza",1000);
    console.log(pizza);
    let burger=await orderFood("burger",2000);
    console.log(burger);
    let noodles=await orderFood("noodles",3000);
    console.log(noodles);
    console.log("all order completed");
    
 }
 restaurant();