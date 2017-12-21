var imageFromPath = function(path){
  var img = new Image()
  img.src = path
  return img
}

var Paddle = function() {
  var image = imageFromPath('./images/paddle.png')
  var obj = {
    image: image,
    x: 150,
    y: 350,
    speed: 5,
  }
  obj.moveLeft = function(){
    obj.x -= obj.speed
  }
  obj.moveRight = function(){
    obj.x += obj.speed    
  }
  return obj
}

var Game = function(){
  var g = {
    actions: {
      
    },
    keydown: {
      
    }
  }
  var canvas = document.querySelector('#canvas')
  var ctx = canvas.getContext('2d')
  g.canvas = canvas
  g.ctx = ctx
  setInterval(function(){
    //update
    g.update()
    //clear
    ctx.clearRect(0, 0, canvas.width, canvas.height)  
    //draw
    g.draw()
  }, 1000/30)

  return g
}
var APP = function(){
  var game = Game()
  var paddle = Paddle()

  var leftDown = false
  var rightDown = false
  window.addEventListener('keydown', function(event){
    var key = event.key
    if(key === 'ArrowLeft'){
      leftDown = true
    }else if(key === 'ArrowRight'){
      rightDown = true
    }
  })
  window.addEventListener('keyup', function(event){
    var key = event.key
    if(key === 'ArrowLeft'){
      leftDown = false
    }else if(key === 'ArrowRight')
      rightDown = false
  })
  game.update = function(){
    if(leftDown){
      paddle.moveLeft()
    }else if(rightDown){
      paddle.moveRight()
    }
  }
  game.draw = function(){
    game.ctx.drawImage(paddle.image, paddle.x, paddle.y)    
  }

}

APP()