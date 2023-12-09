// Os links devem ser coerentes com o arquivo HTML, pois este que contém os elementos a serem alterados e a refência precisa ser feita a partir dele
const loginScreens = ["video/Aurelion Sol.mp4","video/azir.mp4","video/pantheon.mp4","video/poppy.mp4","video/ww.mp4"]
let video = document.querySelector("#video")
let counter = 0
function selectLoginScreen (){
    

    if(counter >= loginScreens.length-1){
      counter = 0
   
      
    }
    else{
        counter += 1
  

    }
    console.log(counter)
    video.setAttribute("src",loginScreens[counter])

 
}


setInterval(selectLoginScreen, 15000);
