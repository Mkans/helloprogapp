<!Doctype html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <h1>hello phonegap</h1>
        <h2> I can't believe it's this simple. ... </h2>
        <div id="connectionStatus" style="color:blue">Not connected to phonegap!</div>
        <script src="cordova.js"></script>
        <script>
            var phonegapReady = function(){
                oStatus = document.getElementById("connectionStatus");
                oStatus.innerHTML = "Now connected to phonegap";
                oStatus.style.color = "green";
            }

            document.addEventListener("deviceready", phonegapReady, false);

        </script>
    </body>
</html>
