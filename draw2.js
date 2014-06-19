// http://dimplejs.org/advanced_examples_viewer.html?id=advanced_time_axis
// http://dimplejs.org/
(function(){

var svg = dimple.newSvg("#chartContainer", 900, 400);
d3.json("responses.json", function(error, data) {
    
    var myChart = new dimple.chart(svg, data);
    //myChart.setBounds(70, 40, 800, 320)
    
    var x = myChart.addTimeAxis("x","postTimeStamp",null,"%d %b");
    var y = myChart.addAxis("y", "upVotesCount", null);

    // Size the bubbles by volume
    //var z = myChart.addMeasureAxis("z", "upVotesCount");
    
    x.timePeriod = d3.time.weeks;
    x.timeInterval = 1;

    myChart.addSeries("responser", dimple.plot.bubble);
    var s = myChart.addSeries("responser", dimple.plot.line);

    // Add line markers to the line because it looks nice
    s.lineMarkers = true;

    myChart.draw();
});

})();

