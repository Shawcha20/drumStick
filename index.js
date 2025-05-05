for (var i=0; i<document.querySelectorAll(".drum").length; i++)
{
    var but=document.querySelectorAll(".drum")[i];  
    but.addEventListener("click",function(){
      var att=this.innerHTML;
        checkKey(att);
        generateAnimation(att);
    });
}
// var audio= new Audio("./sounds/crash.mp3");
function audioSound(name)
{
    var path= "./sounds/"+name+".mp3";
    return new Audio(path);
}
function checkKey(att){

    if( att=='w')
        {
        //   this.classList.toggle("pressed");
          audioSound("tom-1").play();
        }
        if( att=='a'){
        //   this.classList.toggle("pressed");
          audioSound("tom-2").play();}
        if(att=='s'){
        //   this.classList.toggle("pressed");
          audioSound("tom-3").play();}
        if( att=='d'){
        //   this.classList.toggle("pressed");
          audioSound("tom-4").play();}
        if(att=='j'){
        //   this.classList.toggle("pressed");
          audioSound("crash").play();}
        if(att=='k'){
        //   this.classList.toggle("pressed");
          audioSound("kick-bass").play();}
        if(att=='l'){
        //   this.classList.toggle("pressed");
          audioSound("snare").play();
        }
}
document.addEventListener("keydown",(event)=>{
    checkKey(event.key);
    generateAnimation(event.key);
    });

function generateAnimation(key){
    document.querySelector("."+key).classList.toggle("pressed");
    setTimeout(()=>{
        document.querySelector("."+key).classList.toggle("pressed");
    },700);
}