$(function () {
  $('[data-toggle="popover"]').popover({
    trigger: 'hover'
  })
})

$(function () {
  'use strict'
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})
