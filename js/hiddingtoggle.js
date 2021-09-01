window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  if (currentScrollPos > 10) {
    // I am using 'display' instead of 'top':
    document.getElementById("MenuItems").style.display = "none";
  } else {
    document.getElementById("MenuItems").style.display = "initial";
  }
};
