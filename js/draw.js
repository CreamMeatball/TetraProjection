
// 전체
const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

// 윗면
context.beginPath();
context.moveTo(200, 100);
context.lineTo(400, 100);
context.stroke();
context.moveTo(400, 100);
context.lineTo(320, 200);
context.stroke();
context.moveTo(320, 200);
context.lineTo(120, 200);
context.stroke();
context.moveTo(120, 200);
context.lineTo(200, 100);
context.stroke();
context.closePath();

// 중간면
context.beginPath();
context.moveTo(200, 180);
context.lineTo(400, 180);
context.stroke();
context.moveTo(400, 180);
context.lineTo(320, 280);
context.stroke();
context.moveTo(320, 280);
context.lineTo(120, 280);
context.stroke();
context.moveTo(120, 280);
context.lineTo(200, 180);
context.stroke();
context.closePath();

// 아랫면
context.beginPath();
context.moveTo(200, 260);
context.lineTo(400, 260);
context.stroke();
context.moveTo(400, 260);
context.lineTo(320, 360);
context.stroke();
context.moveTo(320, 360);
context.lineTo(120, 360);
context.stroke();
context.moveTo(120, 360);
context.lineTo(200, 260);
context.stroke();
context.closePath();

// 윗 수직선
context.beginPath();
context.moveTo(300, 100);
context.lineTo(300, 260);
context.stroke();
context.closePath();

// 우 수직선
context.beginPath();
context.moveTo(360, 150);
context.lineTo(360, 310);
context.stroke();
context.closePath();

// 하 수직선
context.beginPath();
context.moveTo(220, 200);
context.lineTo(220, 360);
context.stroke();
context.closePath();

// 좌 수직선
context.beginPath();
context.moveTo(160, 150);
context.lineTo(160, 310);
context.stroke();
context.closePath();

// 플레이어 모습
context.beginPath();
context.arc(160, 440, 50, 0, Math.PI*2);
context.fill();
context.closePath();

// X
const canvasXLeft = document.getElementById('canvasXLeft');
const contextXLeft = canvasXLeft.getContext("2d");
const canvasXRight = document.getElementById('canvasXRight');
const contextXRight = canvasXRight.getContext("2d");

// X Left
contextXLeft.beginPath();
contextXLeft.moveTo(150, 50);
contextXLeft.lineTo(350, 50);
contextXLeft.stroke();
contextXLeft.moveTo(350, 50);
contextXLeft.lineTo(350, 250);
contextXLeft.stroke();
contextXLeft.moveTo(350, 250);
contextXLeft.lineTo(150, 250);
contextXLeft.stroke();
contextXLeft.moveTo(150, 250);
contextXLeft.lineTo(150, 50);
contextXLeft.stroke();
contextXLeft.moveTo(250, 50);
contextXLeft.lineTo(250, 250);
contextXLeft.stroke();
contextXLeft.moveTo(150, 150);
contextXLeft.lineTo(350, 150);
contextXLeft.stroke();
contextXLeft.closePath();

// 플레이어 모습
contextXLeft.beginPath();
contextXLeft.arc(420, 150, 50, 0, Math.PI*2);
contextXLeft.fill();
contextXLeft.closePath();

// X Right
contextXRight.beginPath();
contextXRight.moveTo(150, 50);
contextXRight.lineTo(350, 50);
contextXRight.stroke();
contextXRight.moveTo(350, 50);
contextXRight.lineTo(350, 250);
contextXRight.stroke();
contextXRight.moveTo(350, 250);
contextXRight.lineTo(150, 250);
contextXRight.stroke();
contextXRight.moveTo(150, 250);
contextXRight.lineTo(150, 50);
contextXRight.stroke();
contextXRight.moveTo(250, 50);
contextXRight.lineTo(250, 250);
contextXRight.stroke();
contextXRight.moveTo(150, 150);
contextXRight.lineTo(350, 150);
contextXRight.stroke();
contextXRight.closePath();

// 플레이어 모습
contextXRight.beginPath();
contextXRight.arc(70, 150, 50, 0, Math.PI*2);
contextXRight.fill();
contextXRight.closePath();

// Y
const canvasYFront = document.getElementById('canvasYFront');
const contextYFront = canvasYFront.getContext("2d");
const canvasYBack = document.getElementById('canvasYBack');
const contextYBack = canvasYBack.getContext("2d");

// Y Front
contextYFront.beginPath();
contextYFront.moveTo(150, 50);
contextYFront.lineTo(350, 50);
contextYFront.stroke();
contextYFront.moveTo(350, 50);
contextYFront.lineTo(350, 250);
contextYFront.stroke();
contextYFront.moveTo(350, 250);
contextYFront.lineTo(150, 250);
contextYFront.stroke();
contextYFront.moveTo(150, 250);
contextYFront.lineTo(150, 50);
contextYFront.stroke();
contextYFront.moveTo(250, 50);
contextYFront.lineTo(250, 250);
contextYFront.stroke();
contextYFront.moveTo(150, 150);
contextYFront.lineTo(350, 150);
contextYFront.stroke();
contextYFront.closePath();

// Y Back
contextYBack.beginPath();
contextYBack.moveTo(150, 50);
contextYBack.lineTo(350, 50);
contextYBack.stroke();
contextYBack.moveTo(350, 50);
contextYBack.lineTo(350, 250);
contextYBack.stroke();
contextYBack.moveTo(350, 250);
contextYBack.lineTo(150, 250);
contextYBack.stroke();
contextYBack.moveTo(150, 250);
contextYBack.lineTo(150, 50);
contextYBack.stroke();
contextYBack.moveTo(250, 50);
contextYBack.lineTo(250, 250);
contextYBack.stroke();
contextYBack.moveTo(150, 150);
contextYBack.lineTo(350, 150);
contextYBack.stroke();
contextYBack.closePath();

// Z
const canvasZUp = document.getElementById('canvasZUp');
const contextZUp = canvasZUp.getContext("2d");
const canvasZDown = document.getElementById('canvasZDown');
const contextZDown = canvasZDown.getContext("2d");

// Z Up
contextZUp.beginPath();
contextZUp.moveTo(150, 50);
contextZUp.lineTo(350, 50);
contextZUp.stroke();
contextZUp.moveTo(350, 50);
contextZUp.lineTo(350, 250);
contextZUp.stroke();
contextZUp.moveTo(350, 250);
contextZUp.lineTo(150, 250);
contextZUp.stroke();
contextZUp.moveTo(150, 250);
contextZUp.lineTo(150, 50);
contextZUp.stroke();
contextZUp.closePath();

// 플레이어 모습
contextZUp.beginPath();
contextZUp.arc(248, 325, 50, 0, Math.PI*2);
contextZUp.fill();
contextZUp.closePath();

// Z Down
contextZDown.beginPath();
contextZDown.moveTo(150, 50);
contextZDown.lineTo(350, 50);
contextZDown.stroke();
contextZDown.moveTo(350, 50);
contextZDown.lineTo(350, 250);
contextZDown.stroke();
contextZDown.moveTo(350, 250);
contextZDown.lineTo(150, 250);
contextZDown.stroke();
contextZDown.moveTo(150, 250);
contextZDown.lineTo(150, 50);
contextZDown.stroke();
contextZDown.closePath();

// 플레이어 모습
contextZDown.beginPath();
contextZDown.arc(248, 325, 50, 0, Math.PI*2);
contextZDown.fill();
contextZDown.closePath();
