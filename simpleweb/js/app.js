window.onload = function () {
    // toggle area colors
    var showBackgroundColors = false;
    document.getElementById('background-colors').addEventListener('click', function (event) {
        showBackgroundColors = !showBackgroundColors;
        if (showBackgroundColors) {
            var cnt = 0;
            for(var element of  document.getElementsByClassName('grid-box')){
                element.style.backgroundColor = getColor(cnt);
                cnt++;
            }
            event.target.value= "On";
        } else {
            for(var element of  document.getElementsByClassName('grid-box')){
                element.style.backgroundColor = "white";
            }
            event.target.value= "Off";
        }
    });
};

function getColor(cnt){
    colors=["antiquewhite", "aquamarine", "aliceblue", "greenyellow","lavender", "lightgreen"];
    return colors[cnt% colors.length];
}