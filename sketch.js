var imgEstrada,imgAtor,imgCarro1,imgCarro2,imgCarro3,pontoJogo,PontosMortes,velois1,velois2,velois3,velois4,velois5,velois6;

var somC,somP,somE;

function preload(){
  
  imgEstrada = loadImage ("imagens/estrada.png")
   imgAtor = loadImage ("imagens/ator-1.png")
  imgCarro1 = loadImage("imagens/carro-1.png")
  imgCarro2 = loadImage("imagens/carro-2.png")
  imgCarro3 =  loadImage("imagens/carro-3.png")
  
  somC = loadSound("sons/colidiu.mp3");
  somP = loadSound("sons/pontos.wav");
  somE = loadSound("sons/trilha.mp3");

}

function setup() {
  createCanvas(500, 400);
    somE.play();
    somE.loop(); // somTrilha.loop();

  ator = createSprite(50,385,30,30)
  ator.addImage(imgAtor)
  ator.scale = 0.2;
  grupoCarro1 = new Group()
  grupoCarro2 = new Group()
  grupoCarro3 = new Group()
  grupoCarro4 = new Group()
  grupoCarro5 = new Group()
  grupoCarro6 = new Group()
  

  
  
  
  pontoJogo = 0
  PontosMortes = 0
  
  
  
carro_1()
carro_2()
carro_3()
carro_4()
carro_5()
carro_6()
}










function draw() {

 background(imgEstrada)
  textSize(20)
  fill("blue")
  text( pontoJogo,440,22)
  
  textSize(20)
  fill("red")
  text( PontosMortes,10,22)
  
  
  //cima,baixo
    if(keyDown("w")) {
  ator.y = ator.y -5}
    if(keyDown("s")) {
  ator.y = ator.y +5
     }
 //esquerda,direita
    if(keyDown("a")) {
     ator.x = ator.x -5
    }
    if(keyDown("d")) {
     ator.x = ator.x +5
     }
  
    if(grupoCarro1.isTouching(ator)){
    ator.y = 388
      ator.x = 50
    PontosMortes  =  PontosMortes+1
      somC.play();
  }
    if(grupoCarro2.isTouching(ator)){
    ator.y = 388
      ator.x = 50
    PontosMortes  =  PontosMortes+1
      somC.play();
  }
    if(grupoCarro3.isTouching(ator)){
    ator.y = 388
      ator.x = 50
    PontosMortes  =  PontosMortes+1
      somC.play();
  }
    if(grupoCarro4.isTouching(ator)){
    ator.y = 388
      ator.x = 50
    PontosMortes  =  PontosMortes+1
      somC.play();
  }
    if(grupoCarro5.isTouching(ator)){
    ator.y = 388
      ator.x = 50
    PontosMortes  =  PontosMortes+1
      somC.play();
  }
    if(grupoCarro6.isTouching(ator)){
    ator.y = 388
    ator.x = 50
    PontosMortes  =  PontosMortes+1
      somC.play();
  }
    if(ator.y<30){
    ator.y = 388
    ator.x = 50
    pontoJogo=pontoJogo+1;
    somP.play();
    
  }
  
    if(carro1.x <0){
  carro_1() } 
    if(carro2.x <0){
  carro_2() } 
    if(carro3.x <0){
  carro_3() }  
    if(carro4.x <0){
  carro_4() }  
    if(carro5.x <0){
  carro_5() }  
    if(carro6.x <0){
  carro_6() }
    
  
  
  drawSprites();
}
function carro_1(){
  
  carro1 = createSprite(580,60,30,30)
  carro1.addImage(imgCarro1)
  carro1.velocityX = -8
  carro1.scale = 0.6
  grupoCarro1 .add (carro1)
}
function carro_2(){
  carro2 = createSprite(580,120,30,30)
  carro2.addImage(imgCarro2)
  carro2.velocityX = -5.8
  carro2.scale = 0.6
  grupoCarro2 .add (carro2)
}
function carro_3(){
  carro3 = createSprite(570,174,30,30)
  carro3.addImage(imgCarro3)
  carro3.velocityX = -6.5
  carro3.scale = 0.6
  grupoCarro3 .add (carro3)
  }
function carro_4(){
  carro4 = createSprite(560,280,30,30)
  carro4.addImage(imgCarro1)
  carro4.velocityX = -6
  carro4.scale = 0.6
  grupoCarro4 .add (carro4)
}
function carro_5(){
  carro5 = createSprite(550,230,30,30)
  carro5.addImage(imgCarro2)
  carro5.velocityX = -6.8
  carro5.scale = 0.6
  grupoCarro5 .add (carro5)
}
function carro_6(){
  
  carro6 = createSprite(540,340,30,30)
  carro6.addImage(imgCarro3)
  carro6.velocityX = -8.5
  carro6.scale = 0.6
  grupoCarro6 .add (carro6)
}