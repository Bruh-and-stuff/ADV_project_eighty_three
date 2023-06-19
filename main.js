canvases = document.getElementById("scanvas")
ctx = canvases.getContext("2d")

var lastposX, lastposY
var mE = "none"

var col = "black"
var WoL = 2

var i = screen.width
var newW = screen.width - 70
var newH = screen.height - 300

if (i < 992) {
    document.getElementById("scanvas").width = newW
    document.getElementById("scanvas").height = newH
    document.body.style.overflow = "hidden"
}

canvases.addEventListener("touchstart", touchS)

function touchS(a){
    lastposX = a.touches[0].clientX - canvases.offsetLeft
    lastposY = a.touches[0].clientY - canvases.offsetTop
}

canvases.addEventListener("touchmove", touchM)

function touchM(a){
    currentposX = a.touches[0].clientX - canvases.offsetLeft
    currentposY = a.touches[0].clientY - canvases.offsetTop

    ctx.beginPath()
    ctx.strokeStyle = col
    ctx.lineWidth = WoL
    ctx.moveTo(lastposX, lastposY)
    ctx.lineTo(currentposX, currentposY)
    ctx.stroke()

    lastposX = currentposX
    lastposY = currentposY
}
canvases.addEventListener("mousedown", mDown)

function mDown(a){
    mE = "mouseDown"

    col = document.getElementById("colour").value
    WoL = document.getElementById("num").value
}

canvases.addEventListener("mousemove", mMove)

function mMove(a){
    posX = a.clientX - canvases.offsetLeft
    posY = a.clientY - canvases.offsetTop
    
    if (mE == "mouseDown"){
        ctx.beginPath()
        ctx.strokeStyle = col
        ctx.lineWidth = WoL
        ctx.moveTo(lastposX, lastposY)
        ctx.lineTo(posX, posY)
        ctx.stroke()
    }
    
    lastposX = posX
    lastposY = posY
}

canvases.addEventListener("mouseup", mUp)

function mUp(a){
    mE = "mouseUp"
}

canvases.addEventListener("mouseleave", mLeave)

function mLeave(a){
    mE = "mouseLeft"
}

function erase(){
    ctx.clearRect(0, 0, 1300, 950)
}