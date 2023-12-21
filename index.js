var numButtons = document.querySelectorAll(".drum").length;


for(i=0;i<numButtons;i++)
{

    document.querySelectorAll(".drum")[i].addEventListener("click", myfunction);
}

function myfunction(){


    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);
    btnAnimation(buttonInnerHtml);

    
    }


    document.addEventListener("keydown", function(event){
        makeSound(event.key);
        btnAnimation(event.key);
    })

    function makeSound(key){

        switch (key) {
            case "w":
                var audio = new Audio ("sounds/tom-1.mp3");
                audio.play();
                break;
        
                case "a":
                var audio1 = new Audio ("sounds/tom-2.mp3");
                audio1.play();
                break;
    
                case "s":
                var audio2 = new Audio ("sounds/tom-3.mp3");
                audio2.play();
                break;
    
                case "d":
                var audio3 = new Audio ("sounds/tom-4.mp3");
                audio3.play();
                break;
    
                case "j":
                var audio4 = new Audio ("sounds/crash.mp3");
                audio4.play();
                break;
    
                case "k":
                var audio5 = new Audio ("sounds/snare.mp3");
                audio5.play();
                break;
    
                case "l":
                var audio6 = new Audio ("sounds/kick-bass.mp3");
                audio6.play();
                break;
            default:
                break;

        }
    }


    function btnAnimation(currentkey){

        var pressedBtn = document.querySelector("."+currentkey);

        pressedBtn.classList.add("pressed");

        setTimeout (function (params) {
            pressedBtn.classList.remove("pressed");
        },100);

    }