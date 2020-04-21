$(function () {
  "use strict";
  $(".toggle-sidebar").on("click", function () {
    $(".content-area, .sidebar").toggleClass("no-sidebar");
  });
  $(".toggle-submenu").on("click", function () {
    $(this).toggleClass("fa-angle-right fa-angle-down");
    $(this).next(".child-links").slideToggle();
  });
});
