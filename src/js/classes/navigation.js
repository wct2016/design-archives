'use strict';

import $ from 'jquery';

$(() => {

  const $button = $('.js-menu-toggle');
  const $icon   = $('.js-menu-icon');
  const $nav    = $('.js-nav');

  $button.on('click', () => {
    $icon.toggleClass('m-btn-menu-toggle__icon--is-open');
    $nav.slideToggle();
  });

});
