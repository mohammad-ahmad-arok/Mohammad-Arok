// text animation
var typed = new Typed(".auto-type", {
  strings: ["UX/UI Disiner", "front end dev"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
// test active navbar

// for active btn
function active_cv_btn() {
  document.getElementById("active-btn-cv").style.display = "block";
}
document.onclick = function (e) {
  if (e.target.id !== "btn-cv" && e.target.id !== "active-btn-cv") {
    document.getElementById("active-btn-cv").style.display = "none";
  }
};

//add class active for nav
var btnConten = document.getElementById("btn_nav_conten");
var btns = btnConten.getElementsByClassName("btn_nav");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active");
    this.className += " active";
  });
}
// active in scroll
var sec = document.querySelectorAll("section");

onscroll = function () {
  var scrollposition = document.documentElement.scrollTop;

  sec.forEach((section) => {
    if (
      scrollposition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollposition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentid = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentid);
    }
  });
};
var removeAllActiveClasses = function () {
  document.querySelectorAll(".li a").forEach((el) => {
    el.classList.remove("active");
  });
};
var addActiveClass = function (id) {
  var selector = `.li a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
  console.log(selector);
};

//for loder
var loder = document.getElementById("loding");
window.addEventListener("load", function () {
  loder.style.display = "none";
});

// for disblay my jop
var myJopConten = document.getElementById("myjop");
var web = myJopConten.querySelectorAll("div");
var desgin = myJopConten.querySelectorAll("span");

function disblay_all() {
  for (var i = 0; i < web.length; i++) {
    web[i].style.display = "block";
  }
  for (var j = 0; j < desgin.length; j++) {
    desgin[j].style.display = "block";
  }
}
function disblay_web() {
  for (var i = 0; i < web.length; i++) {
    web[i].style.display = "block";
  }
  for (var j = 0; j < desgin.length; j++) {
    desgin[j].style.display = "none";
  }
}

function disblay_desgin() {
  for (var i = 0; i < web.length; i++) {
    web[i].style.display = "none";
  }
  for (var j = 0; j < desgin.length; j++) {
    desgin[j].style.display = "block";
  }
}
