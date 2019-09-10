function setup() {
    createCanvas(600,600); 
    noStroke();
}

function draw() {
    background(255);
  
    // hours
    fill(60);
    let h = map(hour(), 0, 24, 0, 600);
    circle(h, h, 200);
  
    // minutes
    fill(120);
    let m = map(minute(), 0, 60, 0, 600);
    circle(m, m, 80);
  
    // seconds
    fill(180);
    let s = map(second(), 0, 60, 0, 600);
    circle(s, s, 20);
   
}
