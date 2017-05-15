(function () {
  'use strict';
}());

function CurrentDate() {
  this.date = new Date();
  this.formatDate = [
    this.date.getDate(),
    this.date.getMonth(),
    this.date.getFullYear()
  ].join('/')
}