"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.draw = draw;
exports.reportArea = reportArea;
exports.reportPerimeter = reportPerimeter;
exports["default"] = exports.name = void 0;
var name = 'square';
exports.name = name;

function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);
  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}

function random(min, max) {
  var num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function reportArea(length, listId) {
  var listItem = document.createElement('li');
  listItem.textContent = "".concat(name, " area is ").concat(length * length, "px squared.");
  var list = document.getElementById(listId);
  list.appendChild(listItem);
}

function reportPerimeter(length, listId) {
  var listItem = document.createElement('li');
  listItem.textContent = "".concat(name, " perimeter is ").concat(length * 4, "px.");
  var list = document.getElementById(listId);
  list.appendChild(listItem);
}

function randomSquare(ctx) {
  var color1 = random(0, 255);
  var color2 = random(0, 255);
  var color3 = random(0, 255);
  var color = "rgb(".concat(color1, ",").concat(color2, ",").concat(color3, ")");
  ctx.fillStyle = color;
  var x = random(0, 480);
  var y = random(0, 320);
  var length = random(10, 100);
  ctx.fillRect(x, y, length, length);
  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}

var _default = randomSquare;
exports["default"] = _default;