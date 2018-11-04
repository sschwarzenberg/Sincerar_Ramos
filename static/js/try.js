


$(function() {
   $("#one").addClass("progress-bar-1");
   $("#two").addClass("progress-bar-2");
   $("#three").addClass("progress-bar-3");
   $("#four").addClass("progress-bar-4");
});

$('.horizontal .progress-fill span').each(function(){
  var percent = $(this).html();
  $(this).parent().css('width', percent);
});


$('.vertical .progress-fill span').each(function(){
  var percent = $(this).html();
  var pTop = 100 - ( percent.slice(0, percent.length - 1) ) + "%";
  $(this).parent().css({
    'height' : percent,
    'top' : pTop
  });
});




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