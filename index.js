var noOfDrumStrict=document.querySelectorAll("button");



for(var i=0;i<noOfDrumStrict.length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        this.classList.add("pressed");

        setTimeout(function(){
            this.classList.remove("pressed");
        }
        ,100);

        var b=this.innerHTML;
        
        switch(b)
    {
        case 'w': var audio = new Audio('crash.mp3');
                                audio.play();
                                break;
        case 'a':var audio = new Audio('kick-bass.mp3');
                         audio.play();
                            break;
        case 's':var audio = new Audio('snare.mp3');
                            audio.play();
                               break;    
        case 'd':var audio = new Audio('tom-1.mp3');
                         audio.play();
                            break;   
        case 'j':var audio = new Audio('tom-2.mp3');
                            audio.play();
                               break;     
        case 'k':var audio = new Audio('tom-3.mp3');
                         audio.play();
                            break; 
        case 'l':var audio = new Audio('tom-4.mp3');
                            audio.play();
                               break;     
        default:
                console.log(b);
    }
    });
   
    
}


