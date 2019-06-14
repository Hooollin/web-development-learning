$(window).on("scroll", function() {
  let scrolled = $(window).scrollTop();
  let navBar = $(".nav-container");
  let navLinks = $(".nav-container li");
  let clock = $(".clock");
  if (scrolled >= 100) {
    navBar.animate({ height: "80px" }, 80, null, function() {
      navBar.css("backgroundColor", "rgb(73, 121, 175)");
      navLinks.each(function(index, elem) {
        $(this).css({ fontSize: "20px", padding: "24px" });
      });
    });
  } else {
    navBar.animate({ height: "60px" }, 80, null, function() {
      navBar.css("backgroundColor", "transparent");
      navLinks.each(function(index, elem) {
        $(this).css({ fontSize: "16px", padding: "16px" });
      });
    });
  }
});

setInterval(function() {
  $(".clock").text(getLocalTime());
}, 1000);

function getLocalTime() {
  let res = "";
  let date = new Date();
  res +=
    date.getHours() +
    ":" +
    minutes_with_leading_zeros(date) +
    ":" +
    seconds_with_leading_zeros(date);
  return res;
}

function minutes_with_leading_zeros(dt) {
  return (dt.getMinutes() < 10 ? "0" : "") + dt.getMinutes();
}

function seconds_with_leading_zeros(dt) {
  return (dt.getSeconds() < 10 ? "0" : "") + dt.getSeconds();
}
