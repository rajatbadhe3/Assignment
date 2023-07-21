var initialTime;
var stopwatchInterval;

    //#region Functions
    function Start() {
        initialTime = Date.now();
      stopwatchInterval = setInterval(updateStopwatch, 10);
    }

    function Stop() {
      clearInterval(stopwatchInterval);
    }

    function Reset() {
      clearInterval(stopwatchInterval);
      document.getElementById('stopwatch').textContent = '00:00:00';
    }

    function updateStopwatch() {
      var currentTime = Date.now() - initialTime;
      var minutes = Math.floor(currentTime / (1000 * 60));//Math floor used for rounding
      var seconds = Math.floor((currentTime / 1000) % 60);
      var milliseconds = Math.floor((currentTime % 1000) / 10);

      minutes = ADDpaddingZero(minutes);
      seconds = ADDpaddingZero(seconds);
      milliseconds = ADDpaddingZero(milliseconds);

      document.getElementById('stopwatch').textContent = minutes + ':' + seconds + ':' + milliseconds;
    }

    function ADDpaddingZero(number) {
      return number.toString().padStart(2, '0');//00number - start me padding aayegi number zero ki  
    }
    //#endregion