"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.createReportList = createReportList;

function create(id, parent, width, height) {
  var divWrapper = document.createElement('div');
  var canvasElem = document.createElement('canvas');
  parent.appendChild(divWrapper);
  divWrapper.appendChild(canvasElem);
  divWrapper.id = id;
  canvasElem.width = width;
  canvasElem.height = height;
  var ctx = canvasElem.getContext('2d');
  return {
    ctx: ctx,
    id: id
  };
}

function createReportList(wrapperId) {
  var list = document.createElement('ul');
  list.id = wrapperId + '-reporter';
  var canvasWrapper = document.getElementById(wrapperId);
  canvasWrapper.appendChild(list);
  return list.id;
}