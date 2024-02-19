let messageBox = document.querySelector(".js-message");
let btn = document.querySelector(".js-message-btn");
let card = document.querySelector(".js-profile-card");
let closeBtn = document.querySelectorAll(".js-message-close");



btn.addEventListener("click", function (e) {
  e.preventDefault();
  card.classList.add("active");
});

closeBtn.forEach(function (element) {
  console.log(element);
  element.addEventListener("click", function (e) {
    e.preventDefault();
    card.classList.remove("active");
  });
});

function callback(entries){
    console.log ("llamando al callback")

}

$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});

$(function(){
  $('.the-experienced-role').typed({
    stringsElement: $('.the-experienced-roles'),
    loop: true,
    loopCount: false,
    startDelay: 2000,
    backSpeed: 25,
    backDelay: 2000,
    typeSpeed: 25
  });
});

function $$(selector, context) {
	context = context || document;
	var elements = context.querySelectorAll(selector);
	return Array.prototype.slice.call(elements);
} 

$$('.pie').forEach(function(pie) {
  var p = parseFloat(pie.textContent);
  var NS = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(NS, "svg");
  var circle = document.createElementNS(NS, "circle");
  var title = document.createElementNS(NS, "title");
  circle.setAttribute("r", 16);
  circle.setAttribute("cx", 16);
  circle.setAttribute("cy", 16);
  circle.setAttribute("stroke-dasharray", p + " 100");
  circle.setAttribute('class', 'outer')
  svg.setAttribute("viewBox", "0 0 32 32");
  title.textContent = pie.textContent;
  pie.textContent = '';
  svg.appendChild(title);
  svg.appendChild(circle);

  var innerCircle = document.createElementNS(NS, "circle");
  innerCircle.setAttribute("class", 'innerCircle');
  innerCircle.setAttribute("r", 14);
  innerCircle.setAttribute("cx", 16);
  innerCircle.setAttribute("cy", 16);
  innerCircle.setAttribute("stroke-dasharray", "100 100");
  svg.appendChild(innerCircle);
  pie.appendChild(svg);
});
