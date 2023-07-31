function hello(){
    console.log("hi");
   
    // alert("Hello User!");    

    const a = Math.floor(Math.random()*10);
    if(a<5){
        document.getElementById("one").style.background="white";
        document.getElementById("one").style.color="black";
        document.getElementById("two").style.background="black";
        document.getElementById("two").style.color="white";

        // document.getElementsByTagName().style.background="aqua";
    }
    else{
        document.getElementById("one").style.background="lightblue";
        document.getElementById("one").style.color="red";
        document.getElementById("two").style.background="red";
        document.getElementById("two").style.color="lightblue";

        // document.getElementsByTagName(h1).style.background="red";
    }

    console.log("completed");

}
window.onload = (event) => {
    hello();
  };