var penColor;
var pRed, pOrange, pYellow, pGreen, pTeal, pBlue, pPink, pBrown, pWhite, pBlack;

function setup()
{

  createCanvas(800,300);
  background(255);
  penColor = 0;

  //Red Square
  pRed = color(255, 0, 0);
  yRed1 = 2;
  yRed2 = yRed1 + 12;
  fill(pRed);
  stroke(0);
  strokeWeight(0);
  square(2, yRed1, 12); //increment y by 14

  //Orange Square
  pOrange = color(255, 150, 0);
  yOrange1 = 2+14;
  yOrange2 = yOrange1 + 12;
  fill(pOrange);
  stroke(0);
  strokeWeight(0);
  square(2, yOrange1, 12);

  //Yellow Square
  pYellow = color(255, 255, 0);
  yYellow1 = 2+2*14;
  yYellow2 = yYellow1 + 12;
  fill(pYellow);
  stroke(0);
  strokeWeight(0);
  square(2, yYellow1, 12);

  //Green Square
  pGreen = color(0, 255, 0);
  yGreen1 = 2+3*14;
  yGreen2 = yGreen1 + 12;
  fill(pGreen);
  stroke(0);
  strokeWeight(0);
  square(2, yGreen1, 12);

  //Teal Square
  pTeal = color(0, 255, 255);
  yTeal1 = 2+4*14;
  yTeal2 = yTeal1 + 12;
  fill(pTeal);
  stroke(0);
  strokeWeight(0);
  square(2, yTeal1, 12);

  //Blue Square
  pBlue = color(0, 0, 255);
  yBlue1 = 2+5*14;
  yBlue2 = yBlue1 + 12;
  fill(pBlue);
  stroke(0);
  strokeWeight(0);
  square(2, yBlue1, 12);

  //Pink Square
  pPink = color(255, 100, 200);
  yPink1 = 2+6*14;
  yPink2 = yPink1 + 12;
  fill(pPink);
  stroke(0);
  strokeWeight(0);
  square(2, yPink1, 12);

  //Brown Square
  pBrown = color(51, 25, 0);
  yBrown1 = 2+7*14;
  yBrown2 = yBrown1 + 12;
  fill(pBrown);
  stroke(0);
  strokeWeight(0);
  square(2, yBrown1, 12);

  //White Square
  pWhite = color(255);
  yWhite1 = 2+8*14;
  yWhite2 = yWhite1 + 12;
  fill(pWhite);
  stroke(0);
  strokeWeight(0);
  square(2, yWhite1, 12);

  //Black Square
  pBlack = color(0);
  yBlack1 = 2+9*14;
  yBlack2 = yBlack1 + 12;
  fill(pBlack);
  stroke(0);
  strokeWeight(0);
  square(2, yBlack1, 12);

}

function draw()
{

  stroke(penColor);
  strokeWeight(3);
  if (mouseIsPressed === true && mouseX > 17) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }


}





function mouseClicked(){

  //Red
  if (mouseX >= 2 && mouseX <= 12 && mouseY >= yRed1 && mouseY <= yRed2)
  {
    penColor = pRed;
  }

  //Orange
  if (mouseX >= 2 && mouseX <= 12 && mouseY >= yOrange1 && mouseY <= yOrange2)
  {
    penColor = pOrange;
  }

  //Yellow
  if (mouseX >= 2 && mouseX <= 12 && mouseY >= yYellow1 && mouseY <= yYellow2)
  {
    penColor = pYellow;
  }

  //Green
  if (mouseX >= 2 && mouseX <= 12 && mouseY >= yGreen1 && mouseY <= yGreen2)
  {
    penColor = pGreen;
  }

  //Teal
  if (mouseX >= 2 && mouseX <= 12 && mouseY >= yTeal1 && mouseY <= yTeal2)
  {
    penColor = pTeal;
  }

  //Blue
  if (mouseX >= 2 && mouseX <= 12 && mouseY >= yBlue1 && mouseY <= yBlue2)
  {
    penColor = pBlue;
  }

  //Pink
  if (mouseX >= 2 && mouseX <= 12 && mouseY >= yPink1 && mouseY <= yPink2)
  {
    penColor = pPink;
  }

  //Brown
  if (mouseX >= 2 && mouseX <= 12 && mouseY >= yBrown1 && mouseY <= yBrown2)
  {
    penColor = pBrown;
  }

  //White
  if (mouseX >= 2 && mouseX <= 12 && mouseY >= yWhite1 && mouseY <= yWhite2)
  {
    penColor = pWhite;
  }

  //Black
  if (mouseX >= 2 && mouseX <= 12 && mouseY >= yBlack1 && mouseY <= yBlack2)
  {
    penColor = pBlack;
  }


}
