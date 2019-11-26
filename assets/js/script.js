$(function(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  // Hublot
  context.beginPath();
  context.moveTo(170, 190);
  context.fillStyle = '#FFFFFF'
  context.quadraticCurveTo(200, 100, 230, 190);
  context.fill();
  // Vaisseau haut
  context.beginPath();
  context.moveTo(110, 210);
  context.fillStyle = '#E0E1F3'
  context.quadraticCurveTo(200, 150, 290, 210);
  context.fill();
  // Vaisseau bas
  context.beginPath();
  context.moveTo(110, 210);
  context.fillStyle = '#E0E1F3'
  context.quadraticCurveTo(200, 270, 290, 210);
  context.fill();
});
