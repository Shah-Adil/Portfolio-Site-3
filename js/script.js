//  ================================
// STICKY HEADER
//  ================================
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 100) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
});

//  ================================
// HEADER ACTIVE
//  ================================
var btnContainer = document.getElementById("nav_bar");
var btns = btnContainer.getElementsByClassName("nav ul li a");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("header_active");
    current[0].className = current[0].className.replace("header_active", "");
    this.className += " header_active";
  });
}

//  ================================
// HEADER NAV BAR
//  ================================
$(document).ready(function () {
  $(".nav_icon").click(function () {
    $(".container nav").css("right", "0");
  });
  $(".cross").click(function () {
    $(".container nav").css("right", "-320px");
  });
});

window.addEventListener("scroll", () => {
  document.querySelector(".container nav ").style.right = "-320px";
});

//  ================================
// GALLERY FILTER
//  ================================
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

//  ================================
//      GALLERY ACTIVE COLOR
//  ================================
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//  ================================
//      GALLERY ACTIVE COLOR
//  ================================

$(".gallery_mag").magnificPopup({
  delegate: "a",
  type: "image",
  gallery: {
    enabled: true,
  },
});

//  ===============================
//        Custom cursor
//  ===============================

let body = document.querySelector("body");
let cursor = document.createElement("div");
cursor.setAttribute("class", "cursor");
body.appendChild(cursor);

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-cursor", cursor.offsetTop - screenY);
});

window.addEventListener("scroll", (e) => {
  const toSet = parseInt(cursor.getAttribute("data-cursor"));
  cursor.style.top = screenY + toSet + "px";
});

window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
    void cursor.offsetHeight;
    cursor.classList.add("click");
  } else cursor.classList.add("click");
});

// ================ email js ==========================

document.getElementById("contact-form").addEventListener("submit", (e) => {
  (function () {
    //  =====================  change  Public key =======================
    emailjs.init("dMzIabP3_eaddIMdo");
  })();

  var params = {
    name: document.querySelector("#contact-form #name").value,
    email: document.querySelector("#contact-form #email").value,
    phone: document.querySelector("#contact-form #phone").value,
    message: document.querySelector("#contact-form #feedback").value,
  };
  // ======================= change  serviceID & templateID  id =======================
  var serviceID = "service_mu3axx9";
  var templateID = "template_esfx8uc";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Message Success");
    })
    .catch();

  e.preventDefault();
  e.target.reset();
});

// ================ scroll top =========================

$(document).ready(function () {
  var offset = 250;
  var duration = 500;

  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $("#btnScrollToTop").fadeIn(duration);
    } else {
      $("#btnScrollToTop").fadeOut(duration);
    }
  });
});
