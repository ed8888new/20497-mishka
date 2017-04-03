'use strict'

var menu = document.querySelector('.main-nav');
var mainNavToogle = document.querySelector('.main-nav__toggle');
var bodyMask = document.querySelector('.body-mask');
var button = document.querySelector('.btn-choice');

window.onload = function() {
  menu.classList.add('main-nav--close');
  mainNavToogle.classList.add('main-nav--close');
};

mainNavToogle.onclick = function() {
  if (mainNavToogle.classList.contains('main-nav--close')) {
    menu.classList.remove('main-nav--close');
    mainNavToogle.classList.remove('main-nav--close');
  } else {
    menu.classList.add('main-nav--close');
    mainNavToogle.classList.add('main-nav--close');
  }
};

button.onclick = function() {
  if (bodyMask.classList.contains('body-mask--open')) {
    bodyMask.classList.remove('body-mask--open');
  } else {
    bodyMask.classList.add('body-mask--open');
  }
};
