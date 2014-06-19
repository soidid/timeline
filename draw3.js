// http://dimplejs.org/advanced_examples_viewer.html?id=advanced_time_axis
// http://dimplejs.org/
(function(){

var svg = dimple.newSvg("#chartContainer");
d3.json("questions.json", function(error, data) {
    
    var myChart = new dimple.chart(svg, data);
    //myChart.setBounds(70, 40, 800, 500)
    
    var x = myChart.addTimeAxis("x","post_timestamp",null,"%d %b");
    var y = myChart.addMeasureAxis("y", "signatures_count");
    y.tickFormat = ',.0f';

    // Size the bubbles by ....
    //var z = myChart.addMeasureAxis("z", "addressing.length()");
    
    x.timePeriod = d3.time.weeks;
    x.timeInterval = 1;
    
    var mySeries = myChart.addSeries("title", dimple.plot.bubble);
    mySeries.addEventHandler("click", function (e) {
        console.log(e); // Log the brand of the clicked bubble
    });

    
    myChart.draw();
});

})();

