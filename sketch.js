let data;
let arrL, arrR, arrU, arrD;
//imgs
let step1, step2, step3, step4;
//sounds
let bgm, sfx;
let scene = 0;
let seconds = 10;
let bg;
let hit1, hit2, miss;
let logo;

let loopStart = 0.5;
let loopDuration = 0.2;

var bgmv = 0.2;

var sfxv = 0.8;

var health = 10;
var mhealth = 10;

var score = 0;

function preload() {
  data = canvas;
  bg = loadImage('background.jpg');
  logo = loadImage('logo.webp');
  bgm = loadSound('cyber.mp3');
  miss = loadSound('miss.mp3');
  hit1 = loadSound('hit1.wav');
  hit2 = loadSound('hit2.wav');
  
}

function setup() {
  new Canvas(1000, 800);
  switch(scene) {
    case 0:
      
      logo = new Sprite(width/2,160);
      logo.rotationLock = true;
      logo.img = 'logo.webp';
      logo.scale = 0.7;
      logo.collider = 'none';
      
      step1 = new Sprite(200,100);
      step1.rotationLock = true;
      step1.img = 'step1.png';
      step1.scale = 0.9;
      step1.collider = 'none';
      
      step2 = new Sprite(400,100);
      step2.rotationLock = true;
      step2.img = 'step2.png';
      step2.scale = 0.9;
      step2.collider = 'none';
      
      step3 = new Sprite(600,100);
      step3.rotationLock = true;
      step3.img = 'step3.png';
      step3.scale = 0.9;
      step3.collider = 'none';
      
      step4 = new Sprite(800,100);
      step4.rotationLock = true;
      step4.img = 'step4.png';
      step4.scale = 0.9;
      step4.collider = 'none';
      
      arrR = new Group();
      arrR.rotationLock = true;
      arrR.direction= -90;
      arrR.img = 'arrr.png';
      arrR.scale = 0.9;
      
      arrL = new Group();
      arrL.rotationLock = true;
      arrL.direction= -90;
      arrL.img = 'arrl.png';
      arrL.scale = 0.9;
      
      arrU = new Group();
      arrU.rotationLock = true;
      arrU.direction= -90;
      arrU.img = 'arru.png'
      arrU.scale = 0.9;
      
      arrD = new Group();
      arrD.rotationLock = true;
      arrD.direction= -90;
      arrD.img = 'arrd.png'
      arrD.scale = 0.9;
      
      des1 = new Sprite(200, -200, 200, 1, 'static');
      des2 = new Sprite(400, -200, 200, 1, 'static');
      des3 = new Sprite(600, -200, 200, 1, 'static');
      des4 = new Sprite(800, -200, 200, 1, 'static');
      
      bgmv = 0.4;
      sfxv = 0.4;
      
      backgroundM();
  }
}

function draw() {
  clear();
  switch (scene) {
    //Home Screen
    case 0:
      soundV();
      background(bg);
      textSize(40);
      noStroke();
      textFont('Pixelify Sans');
      textAlign(CENTER);
      step1.img = 'invis.png';
      step2.img = 'invis.png';
      step3.img = 'invis.png';
      step4.img = 'invis.png';
      logo.img = 'logo.webp';
      logo.y = 160;
      
      //Start Button
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+200 && mouseY <= height/2+300) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      rectMode(CENTER);
      fill(8, 0, 31);
      rect(width/2, height/2+250, 300, 100);
      noStroke();
      
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+200 && mouseY <= height/2+300) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
        textSize(44);
        text('Start', width/2, height/2+265);
      //Close Start Button
      
      //Settings Button
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+50 && mouseY <= height/2+150) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      rectMode(CENTER);
      fill(8, 0, 31);
      rect(width/2, height/2+100, 300, 100);
      noStroke();
      
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+50 && mouseY <= height/2+150) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
        textSize(44);
        text('Settings', width/2, height/2+115);
      //Close Settings Button
      
      //Controls Button
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2-100 && mouseY <= height/2) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      rectMode(CENTER);
      fill(8, 0, 31);
      rect(width/2, height/2-50, 300, 100);
      noStroke();
      
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2-100 && mouseY <= height/2) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
        textSize(44);
        text('Controls', width/2, height/2-35);
      //Close Controls Button
      
    break;
    //Game Screen
    case 1:
      soundV();
      step1.y = 100;
      step2.y = 100;
      step3.y = 100;
      step4.y = 100;
      arrR.speed = 5;
      arrL.speed = 5;
      arrU.speed = 5;
      arrD.speed = 5;
      arrR.img = 'arrr.png';
      arrL.img = 'arrl.png';
      arrU.img = 'arru.png';
      arrD.img = 'arrd.png';
      logo.img = 'invis.png';
      background(bg);
      textSize(40);
      noStroke();
      textFont('Pixelify Sans');
      textAlign(CENTER);
      fill(255, 0, 225);
      text(score,width/2, height/2);
      updateHealth(health, mhealth);
      noStroke();
      
      for(i = 0; i < arrR.length; i++) {
        if(arrR[i].collides(des4)) {
          arrR[i].remove();
          health--;
          miss.play();
        }
      }
      for(i = 0; i < arrR.length; i++) {
        for(j=0; j < arrR.length; j++) {
          if(arrR[j].overlap(arrR[i])) {
            arrR[j].remove();
            return;
          }
        }
       }
      
      for(i = 0; i < arrL.length; i++) {
        if(arrL[i].collides(des1)) {
          arrL[i].remove();
          health--;
          miss.play();
        }
      }
      for(i = 0; i < arrL.length; i++) {
        for(j=0; j < arrL.length; j++) {
          if(arrL[j].overlap(arrL[i])) {
            arrL[j].remove();
            return;
          }
        }
       }
      
      for(i = 0; i < arrU.length; i++) {
        if(arrU[i].collides(des2)) {
          arrU[i].remove();
          health--;
          miss.play();
        }
      }
      for(i = 0; i < arrU.length; i++) {
        for(j=0; j < arrU.length; j++) {
          if(arrU[j].overlap(arrU[i])) {
            arrU[j].remove();
            return;
          }
        }
       }
      
      for(i = 0; i < arrD.length; i++) {
        if(arrD[i].collides(des3)) {
          arrD[i].remove();
          health--;
          miss.play();
        }
      }
      for(i = 0; i < arrD.length; i++) {
        for(j=0; j < arrD.length; j++) {
          if(arrD[j].overlap(arrD[i])) {
            arrD[j].remove();
            return;
          }
        }
      }
      
      
      
      //color change
      if(kb.pressing('left')) {
        step1.img = 'stepp1.png';
      }
        else {
          step1.img = 'step1.png';
        }
      
      if(kb.pressing('up')) {
        step2.img = 'stepp2.png';
      }
        else {
          step2.img = 'step2.png';
        }
      
      if(kb.pressing('down')) {
        step3.img = 'stepp3.png';
      }
        else {
          step3.img = 'step3.png';
        }
      
      if(kb.pressing('right')) {
        step4.img = 'stepp4.png';
      }
        else {
          step4.img = 'step4.png';
        }
      
      for(i = 0; i < arrL.length; i++) {
        if(kb.presses('left') && arrL[i].y <= 0+150 && arrL[i].y >= 10) {
          arrL[i].remove();
          score += 100;
          hit1.play();
          return;
        }
        else if (kb.presses('left') && arrL[i].y <= 300 && arrL[i].y >= -30) {
          arrL[i].remove();
          score += 10;
          hit2.play();
          return;
        }
      }
      
      for(i = 0; i < arrU.length; i++) {
        if(kb.presses('up') && arrU[i].y <= 0+150 && arrU[i].y >= 10) {
          arrU[i].remove();
          score += 100;
          hit1.play();
          return;
        }
        else if (kb.presses('up') && arrU[i].y <= 300 && arrU[i].y >= -30) {
          arrU[i].remove();
          score += 10;
          hit2.play();
          return;
        }
      }
      
      for(i = 0; i < arrD.length; i++) {
        if(kb.presses('down') && arrD[i].y <= 0+150 && arrD[i].y >= 10) {
          arrD[i].remove();
          score += 100;
          hit1.play();
          return;
        }
        else if (kb.presses('down') && arrD[i].y <= 300 && arrD[i].y >= -30) {
          arrD[i].remove();
          score += 10;
          hit2.play();
          return;
        }
      }
      
      for(i = 0; i < arrR.length; i++) {
        if(kb.presses('right') && arrR[i].y <= 0+150 && arrR[i].y >= 10) {
          arrR[i].remove();
          score += 100;
          hit1.play();
          return;
        }
        else if (kb.presses('right') && arrR[i].y <= 300 && arrR[i].y >= -30) {
          arrR[i].remove();
          score += 10;
          hit2.play();
          return;
        }
      }
      
      if (kb.presses('space')) {
        scene = 4;
      }
      
      if (kb.presses('escape')) {
        scene = 4;
      }
      
      if (health <= 0){
        scene = 2;
        arrR.cull(-1000);
        arrL.cull(-1000);
        arrU.cull(-1000);
        arrD.cull(-1000);
      }
      
      spawnT1 = random(120,480);
      spawnT2 = random(120,480);
      spawnT3 = random(120,480);
      spawnT4 = random(120,480);
      spawn();
      
    break;
    //Gamer Over Screen
    case 2:
      
      soundV();
      step1.img = 'invis.png';
      step2.img = 'invis.png';
      step3.img = 'invis.png';
      step4.img = 'invis.png';
      logo.img = 'logo.webp';
      logo.y = 160;
      background(bg);
      fill(255, 0, 225);
      textSize(66);
      text('GAME OVER!', width/2, height/2-50);
      textSize(44);
      text('Score: ' + score, width/2, height/2+20);
      //Home Button
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+200 && mouseY <= height/2+300) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      rectMode(CENTER);
      fill(8, 0, 31);
      rect(width/2, height/2+250, 300, 100);
      noStroke();
      
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+200 && mouseY <= height/2+300) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
        textSize(44);
        text('Home', width/2, height/2+265);
      //Close Home Button
      //Play Again
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+50 && mouseY <= height/2+150) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      rectMode(CENTER);
      fill(8, 0, 31);
      rect(width/2, height/2+100, 300, 100);
      noStroke();
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+50 && mouseY <= height/2+150) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
        textSize(44);
        text('Play Again', width/2, height/2+115);
      //Close Play Again
    break;
    //Close Game Over Screen
    //Settings Screen
    case 3:
      
      soundV()
      background(bg);
      logo.y = 130;
      logo.img = 'logo.webp';
      
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+200 && mouseY <= height/2+300) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      rectMode(CENTER);
      fill(8, 0, 31);
      rect(width/2, height/2+250, 300, 100);
      noStroke();
      
      if (mouseX >= width/2-65 && mouseX <= width/2-35 && mouseY >= height/2-45 && mouseY <= height/2-5) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      fill(8, 0, 31);
      rect(width/2-50, height/2-30, 30, 30);
      noStroke();
      
      if (mouseX >= width/2+35 && mouseX <= width/2+65 && mouseY >= height/2-45 && mouseY <= height/2-5) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      fill(8, 0, 31);
      rect(width/2+50, height/2-30, 30, 30);
      noStroke();
      
      if (mouseX >= width/2-65 && mouseX <= width/2-35 && mouseY >= height/2+35 && mouseY <= height/2+65) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      fill(8, 0, 31);
      rect(width/2-50, height/2+50, 30, 30);
      noStroke();
      
      if (mouseX >= width/2+35 && mouseX <= width/2+65 && mouseY >= height/2+35 && mouseY <= height/2+65) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      fill(8, 0, 31);
      rect(width/2+50, height/2+50, 30, 30);
      noStroke();
      
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+200 && mouseY <= height/2+300) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
        textSize(44);
        text('Back', width/2, height/2+265);
      
      fill(255, 0, 225);
      textAlign(CENTER);
      textSize(60);
      text('SETTINGS',width/2, height/2-120);
      
      textSize(36);
      text('Music Volume',width/2, height/2-60);
      text(bgmv.toFixed(1),width/2, height/2-20);
      if (mouseX >= width/2-65 && mouseX <= width/2-35 && mouseY >= height/2-45 && mouseY <= height/2-5) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
      text('-',width/2-50, height/2-20);
      if (mouseX >= width/2+35 && mouseX <= width/2+65 && mouseY >= height/2-45 && mouseY <= height/2-5) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
      text('+',width/2+50, height/2-20);
      fill(255, 0, 225)
      text('SFX Volume',width/2, height/2+20);
      text(sfxv.toFixed(1),width/2, height/2+60);
      if (mouseX >= width/2-65 && mouseX <= width/2-35 && mouseY >= height/2+35 && mouseY <= height/2+65) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
      text('-',width/2-50, height/2+60);
      if (mouseX >= width/2+35 && mouseX <= width/2+65 && mouseY >= height/2+35 && mouseY <= height/2+65) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
      text('+',width/2+50, height/2+60);
      
    break;
    //Close Settings Screen
    //Pause Screen
    case 4:
      
      soundV()
      background(bg);
      logo.y = 130;
      step1.img = 'invis.png';
      step2.img = 'invis.png';
      step3.img = 'invis.png';
      step4.img = 'invis.png';
      arrR.img = 'invis.png';
      arrL.img = 'invis.png';
      arrU.img = 'invis.png';
      arrD.img = 'invis.png';
      logo.img = 'logo.webp';
      arrR.speed = 0;
      arrL.speed = 0;
      arrU.speed = 0;
      arrD.speed = 0;
      
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+150 && mouseY <= height/2+250) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      rectMode(CENTER);
      fill(8, 0, 31);
      rect(width/2, height/2+200, 300, 100);
      noStroke();
      
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+270 && mouseY <= height/2+370) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      rectMode(CENTER);
      fill(8, 0, 31);
      rect(width/2, height/2+320, 300, 100);
      noStroke();
      
      if (mouseX >= width/2-65 && mouseX <= width/2-35 && mouseY >= height/2-45 && mouseY <= height/2-5) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      fill(8, 0, 31);
      rect(width/2-50, height/2-30, 30, 30);
      noStroke();
      
      if (mouseX >= width/2+35 && mouseX <= width/2+65 && mouseY >= height/2-45 && mouseY <= height/2-5) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      fill(8, 0, 31);
      rect(width/2+50, height/2-30, 30, 30);
      noStroke();
      
      if (mouseX >= width/2-65 && mouseX <= width/2-35 && mouseY >= height/2+35 && mouseY <= height/2+65) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      fill(8, 0, 31);
      rect(width/2-50, height/2+50, 30, 30);
      noStroke();
      
      if (mouseX >= width/2+35 && mouseX <= width/2+65 && mouseY >= height/2+35 && mouseY <= height/2+65) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      fill(8, 0, 31);
      rect(width/2+50, height/2+50, 30, 30);
      noStroke();
      
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+150 && mouseY <= height/2+250) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
        textSize(44);
        text('Resume', width/2, height/2+215);
      
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+270 && mouseY <= height/2+370) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
        textSize(44);
        text('Home', width/2, height/2+335);
      
      fill(255, 0, 225);
      textAlign(CENTER);
      textSize(60);
      text('PAUSED',width/2, height/2-120);
      
      textSize(36);
      text('Music Volume',width/2, height/2-60);
      text(bgmv.toFixed(1),width/2, height/2-20);
      if (mouseX >= width/2-65 && mouseX <= width/2-35 && mouseY >= height/2-45 && mouseY <= height/2-5) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
      text('-',width/2-50, height/2-20);
      if (mouseX >= width/2+35 && mouseX <= width/2+65 && mouseY >= height/2-45 && mouseY <= height/2-5) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
      text('+',width/2+50, height/2-20);
      fill(255, 0, 225)
      text('SFX Volume',width/2, height/2+20);
      text(sfxv.toFixed(1),width/2, height/2+60);
      if (mouseX >= width/2-65 && mouseX <= width/2-35 && mouseY >= height/2+35 && mouseY <= height/2+65) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
      text('-',width/2-50, height/2+60);
      if (mouseX >= width/2+35 && mouseX <= width/2+65 && mouseY >= height/2+35 && mouseY <= height/2+65) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
      text('+',width/2+50, height/2+60);
      
      if (kb.presses('space')) {
        scene = 1;
      }
      if (kb.presses('escape')) {
        scene = 1;
      }
      
      fill(255, 0, 225);
      textAlign(CENTER);
      textSize(36);
      text('Score: ' + score,width/2, height/2+115);
      
    break;
    //Close Pause
    //Controls
    case 5:
      
      logo.y = 130;
      soundV()
      background(bg);
      logo.img = 'logo.webp';
      
      fill(255, 0, 225);
      textAlign(CENTER);
      textSize(60);
      text('CONTROLS',width/2, height/2-120);
      
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+200 && mouseY <= height/2+300) {
        stroke(0, 255, 242);
      }
      else {
        stroke(255, 0, 225);
      }
      
      rectMode(CENTER);
      fill(8, 0, 31);
      rect(width/2, height/2+250, 300, 100);
      noStroke();
      
      if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+200 && mouseY <= height/2+300) {
        fill(0, 255, 242);
      }
      else {
        fill(255, 0, 225);
      }
        textSize(44);
        text('Back', width/2, height/2+265);
      
      fill(255, 0, 225);
      textSize(38);
      text('Dance Pad:',width/2, height/2-60);
      textSize(30);
      text('Step on the correct arrow when it comes close',width/2, height/2-20);
      
      textSize(38);
      text('Keyboard:',width/2, height/2+60);
      textSize(30);
      text('Arrow Keys or WASD correspond with arrows on screen',width/2, height/2+100);
      text('Space/Escape to Pause',width/2, height/2+140);
      
    break;
    //Close Controls
      
  }
}

function backgroundM() {
  bgm.loop();
  userStartAudio();
}

function soundV() {
  bgm.setVolume(bgmv);
  hit1.setVolume(sfxv);
  hit2.setVolume(sfxv+0.5);
  miss.setVolume(sfxv+0.6);
  if (bgmv <= 0) {
    bgmv = 0;
  }
  if (bgmv >= 1) {
    bgmv = 1;
  }
  if (sfxv <= 0) {
    sfxv = 0;
  }
  if (sfxv >= 1) {
    sfxv = 1;
  }
}

function updateHealth(health, mhealth) {
  rectMode(CENTER);
  noStroke();
  fill(255, 0, 225);
  rect(width / 2, 7, map(health, 0, mhealth, 0 ,width-4), 10);
  stroke(0, 255, 242);
  strokeWeight(2);
  noFill();
  rect(width / 2, 7, width, 10);
}

function spawn() {
  if (seconds <=60 && frameCount % spawnT1.toFixed(0) == 0) {
    new arrR.Sprite(800,height+200);
  }
  if (seconds <=60 && frameCount % spawnT2.toFixed(0) == 0) {
    new arrL.Sprite(200,height+200);
  }
  if (seconds <=60 && frameCount % spawnT3.toFixed(0) == 0) {
    new arrU.Sprite(400,height+200);
  }
  if (seconds <=60 && frameCount % spawnT4.toFixed(0) == 0) {
    new arrD.Sprite(600,height+200);
  }
}

function mouseClicked() {
  //Title Screen Buttons
  
  //Start Button
  if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+200 && mouseY <= height/2+300 && scene == 0) {
        scene = 1;
        health = 10;
      }
  //Close Start Button
  
  //Settings Button
  if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+50 && mouseY <= height/2+150 && scene == 0) {
        scene = 3;
      }
  //Close Settings 
  
  //Controls Button
  if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2-100 && mouseY <= height/2 && scene == 0) {
        scene = 5;
      }
  //Close Controls
  
  //Close Title Buttons
  
  //Settings Screen Buttons
  //Back Button
  if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+200 && mouseY <= height/2+300 && scene == 3) {
        scene = 0;
      }
  //Close Back Button
  //Volume Buttons
  if (mouseX >= width/2-65 && mouseX <= width/2-35 && mouseY >= height/2-45 && mouseY <= height/2-5 && scene == 3) {
        bgmv -= 0.1;
      }
  if (mouseX >= width/2+35 && mouseX <= width/2+65 && mouseY >= height/2-45 && mouseY <= height/2-5 && scene == 3) {
        bgmv += 0.1;
      }
  if (mouseX >= width/2-65 && mouseX <= width/2-35 && mouseY >= height/2+35 && mouseY <= height/2+65 && scene == 3) {
        sfxv -= 0.1;
      }
  if (mouseX >= width/2+35 && mouseX <= width/2+65 && mouseY >= height/2+35 && mouseY <= height/2+65 && scene == 3) {
        sfxv += 0.1;
      }
  //Close Volume Buttons
  //Close Settings Screen Buttons
  
  //Controls Screen Buttons
    if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+200 && mouseY <= height/2+300 && scene == 5) {
        scene = 0;
      }
  //Close Controls Screen
  
  //Pause Screen
  //Resume
  if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+150 && mouseY <= height/2+250 && scene == 4) {
        scene = 1;
      }
  //Close Resume
  //Home
  if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+270 && mouseY <= height/2+370 && scene == 4) {
    scene = 0;
  }
  //Close Home
  //Volume Buttons
  if (mouseX >= width/2-65 && mouseX <= width/2-35 && mouseY >= height/2-45 && mouseY <= height/2-5 && scene == 4) {
        bgmv -= 0.1;
      }
  if (mouseX >= width/2+35 && mouseX <= width/2+65 && mouseY >= height/2-45 && mouseY <= height/2-5 && scene == 4) {
        bgmv += 0.1;
      }
  if (mouseX >= width/2-65 && mouseX <= width/2-35 && mouseY >= height/2+35 && mouseY <= height/2+65 && scene == 4) {
        sfxv -= 0.1;
      }
  if (mouseX >= width/2+35 && mouseX <= width/2+65 && mouseY >= height/2+35 && mouseY <= height/2+65 && scene == 4) {
        sfxv += 0.1;
      }
  //Close Volume Buttons
  //Close Pause Screen
  
  //Gamer Over Screen Buttons
  
  //Home Button
  if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+200 && mouseY <= height/2+300 && scene == 2) {
        scene = 0;
        health = 10;
        score = 0;
      }
  //Close Home Button
  //Play Again
  if (mouseX >= width/2-150 && mouseX <= width/2+150 && mouseY >= height/2+50 && mouseY <= height/2+150 && scene == 2) {
    scene = 1;
    health = 10;
    score = 0;
  }
  //Close Play Again
}