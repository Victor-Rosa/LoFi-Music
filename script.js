let music = document.getElementById("audio")
let img = document.getElementsByClassName("img_container")[0]
console.log(img)

function musicPlay(){
    music.play()
    img.style.animation = ''
    img.style.animation = "spin 8s linear infinite"
    
}

function musicPause(){
    music.pause()
    img.style.animation = ''

}

function musicBack(){
    music.currentTime -= 15
}

function musicAvanced(){
    music.currentTime += 15
}