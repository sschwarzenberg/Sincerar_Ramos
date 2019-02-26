//
//
//
// $(function() {
//    $("#one").addClass("progress-bar-1");
//    $("#two").addClass("progress-bar-2");
//    $("#three").addClass("progress-bar-3");
//    $("#four").addClass("progress-bar-4");
// });
//
// $('.horizontal .progress-fill span').each(function(){
//   var percent = $(this).html();
//   $(this).parent().css('width', percent);
// });
//
//
// $('.vertical .progress-fill span').each(function(){
//   var percent = $(this).html();
//   var pTop = 100 - ( percent.slice(0, percent.length - 1) ) + "%";
//   $(this).parent().css({
//     'height' : percent,
//     'top' : pTop
//   });
// });
//
// var modal = document.querySelector(".modal");
// var trigger = document.querySelector(".trigger");
// var closeButton = document.querySelector(".close-button");
//
// function toggleModal() {
//     modal.classList.toggle("show-modal");
// }
//
// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }
//
// trigger.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);
//
//
//



    function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }


    var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }


}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
}





      //
      //  google.charts.load('current', {
      //   'packages': ['corechart']
      // });
      // google.charts.setOnLoadCallback(drawChart);
      //
      // function drawChart() {
      //
      //   var data = google.visualization.arrayToDataTable([
      //     ['Task', 'Hours per Day'],
      //     ['Work', 11],
      //     ['Eat', 2],
      //     ['Commute', 2],
      //     ['Watch TV', 2],
      //     ['Sleep', 7]
      //   ]);
      //
      //   var options = {
      //     title: 'My Daily Activities'
      //   };
      //
      //   var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      //
      //   chart.draw(data, options);
      // }