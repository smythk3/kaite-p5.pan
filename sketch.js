// .pan([-1 to 1]);

var sound;
var lr;

function setup() {
  createCanvas(1200,100);
  sound = new p5.Oscillator();
  sound.setType('sine');
  sound.freq(440);
  sound.amp(0.1);
  sound.start();
  
  
}

function draw() {
  lr = map(mouseX, 0 , width, -1, 1);
  sound.pan(lr, 0.01);
  
  background(0);
  stroke(255);
  line(mouseX, 0, mouseX, height);
}