function display(){
    // let p1=document.querySelector("p");
    let p1=document.querySelectorAll("p"); 
    p1[0].innerHTML="I am in para";
    p1[0].style.backgroundColor="red";
    p1[1].innerHTML="I am in para 2";
    p1[1].style.backgroundColor="green";
}

let chanageHeader=()=>{
    let h1=document.querySelector("h1");
    h1.textContent="hann Ji Good Morning";
}
