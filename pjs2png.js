if (phantom.state.length === 0) {
  phantom.state = 1;
  phantom.content = '<html><body><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script><script src="http://processingjs.org/content/download/processing-js-1.1.0/processing-1.1.0.min.js"></script><canvas id="surface"></canvas></body></html>';
} else {
  // getting pjs
  var pjsURL = phantom.args[0];
  var pngURL = phantom.args[1];
  $.get(pjsURL, function(data) {
    var canvas = document.getElementById("surface");
    new Processing(canvas, data);
    // phantom.viewportSize = { width: canvas.width, height: canvas.height };
    // phantom.render('gear.png');
    var dataURL = canvas.toDataURL();
    $.post(pngURL, {data: dataURL}, function(data) {
      phantom.exit();
    });
  });
}
