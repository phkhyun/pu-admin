require('../../index.html')
window._ = require('lodash');

try {
  window.Popper = require('popper.js').default;
  window.$ = window.jQuery = require('jquery');

  require('bootstrap');
} catch (e) {}


var Selector = {
  sidebar       : '.left-col',
  mainHeader    : '.main-header',
  contentWrapper: '.content-wrapper',
  // wrapper       : '.wrapper',
  // mainFooter    : '.main-footer',
}

var windowHeight  = $(window).outerHeight()
var headerHeight = $(Selector.mainHeader).outerHeight() || 0
// var footerHeight  = $(Selector.mainFooter).outerHeight() || 0
// var sidebarHeight = $(Selector.sidebar).outerHeight() || 0

$(Selector.sidebar).css('min-height', windowHeight);
$(Selector.contentWrapper).css('min-height', windowHeight - headerHeight);



//line chart
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
        'rgba(105, 0, 132, .2)',
        ],
        borderColor: [
        'rgba(200, 99, 132, .7)',
        ],
        borderWidth: 2
    },
    {
        label: "My Second dataset",
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: [
        'rgba(0, 137, 132, .2)',
        ],
        borderColor: [
        'rgba(0, 10, 130, .7)',
        ],
        borderWidth: 2
    }
    ]
},
options: {
    responsive: true
}
});

//doughnut chart
var ctxD = document.getElementById("doughnutChart").getContext('2d');
var myLineChart = new Chart(ctxD, {
    type: 'doughnut',
    data: {
    labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
    datasets: [{
        data: [300, 50, 100, 40, 120],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
    }]
    },
    options: {
    responsive: true
    }
});



// Event
$('.fa-caret-square-down').click(function(){
  $('.right-header').slideToggle();
});