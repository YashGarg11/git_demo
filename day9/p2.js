async function orderFood(name,time){
    return new Promise((resolve,reject)=>{
        if(name=="burger") reject("burger not available");
        setTimeout(()=>{
            resolve("order for " +name+" prepared");
        },time)
    });
 }

 async function restaurant() {
    console.log("order placed");
    let pizza=await orderFood("pizza",1000);
    console.log(pizza);
    try{
    let burger=await orderFood("burger",2000);
    console.log(burger);}
    catch(error){
        console.log(error);
    }
    let noodles=await orderFood("noodles",3000);
    console.log(noodles);
    console.log("all order completed");
    
 }
 restaurant();