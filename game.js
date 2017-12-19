var canvas = document.querySelector('#canvas')
var ctx = canvas.getContext('2d')

var img = new Image()
img.src = "./images/paddle.png"
var x = 150
var y = 300
img.onload = function(){
  ctx.drawImage(img, x, y)
}

window.addEventListener('keydown', function(event){
  var key = event.key
  if(key === 'ArrowLeft'){
    x -= 10
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, x, y)
  }else if(key === 'ArrowRight'){
    x += 10
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, x, y)
  }
})