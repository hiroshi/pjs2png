pjs2png
=======
pjs2png is a command line tool. It generates png images form Processing.js shapes.

If you don't know about Processing.js try:
http://processingjs.org/learning/ide


Prerequisites
-------------
### PhantomJS
PhantomJS is a headless browser on top of QtWebKit. It provides the canvas for Processing.js.
http://www.phantomjs.org/


### Ruby & Sinatra
Sinatra is a web server framework for minimalist. 
It delegates local file accesses, since PhantomJS doesn't seem to be able to handle local files on the client side so far.

If you don't have any ruby, get it.
http://www.ruby-lang.org/

Then install sinatra.
http://www.sinatrarb.com/

    gem install sinatra


Usage example
-------------

    git clone git://github.com/hiroshi/pjs2png.git
    cd pjs2png
    ./pjs2png /path/to/phantomjs examples/gear.pjs gear.png



Intenal
-------
1. Start a http server instance.
2. Wait until the server is ready.
3. Execute PhantomJS
3.1. Open a html document with a canvas.
3.2. GET pjs file from the server, and feed it to Processing.js.
3.3. POST dataURL of png to the server
4. The server write the png into a file.


TODO
----
- Get rid of weird client/server structure
