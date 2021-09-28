class Form {

  constructor() {
    
  }
  

  display(){
   backgroundImage = createImg("assets/backgroundImg.jpg");
    button = createButton('Play');
    greeting = createElement('h2');
    title = createElement('h2');

    title.html("ONE SURVIVAL");
    title.position(displayWidth/2 - 50, 0);
    
    creadit=createElement('h2');
    creadit.html ("Made by - parth sharma (skullfraxis) still on development v0.1 ;O) *_*")
    creadit.position(displayWidth-200,displayHeight/2);
    backgroundImage.position(0,0);
    backgroundImage.size(displayWidth,displayHeight);

    greeting.html("Hello surviver you need to save the world go to the end temple for the key of the world ")
    greeting.position(displayWidth/2 -450, displayHeight/4);

    button.position(displayWidth/2 -200 , displayHeight/2+40);
    button.mousePressed(function(){
        gameState = play;
        greeting.hide();
        title.hide();
        backgroundImage.hide();  
        button.hide();
        creadit.hide();
    });    
}

}

