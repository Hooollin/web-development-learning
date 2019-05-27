$(window).on("scroll", function() {
  let scrolled = $(window).scrollTop();
  let navBar = $(".nav-container");
  if (scrolled > 20) {
    console.log(1);
    navBar.animate({ height: "80px" }, 80, null, function() {
      navBar.css("backgroundColor", "rgb(73, 121, 175)");
    });
  } else {
    navBar.animate({ height: "60px" }, 80, null, function() {
      navBar.css("backgroundColor", "transparent");
    });
  }
});
