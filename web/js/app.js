window.onload = function () {
    // toggle area colors
    var showBackgroundColors = false;
    document.getElementById('background-colors').addEventListener('click', function () {
        showBackgroundColors = !showBackgroundColors;
        if (showBackgroundColors) {
            var cnt = 0;
            for(var element of  document.getElementsByClassName('grid-box')){
                element.style.backgroundColor = getColor(cnt);
                cnt++;
            }
        } else {
            for(var element of  document.getElementsByClassName('grid-box')){
                element.style.backgroundColor = "white";
            }
        }
    });

    // toggle grid line visibility
    var showGridLines = false;
    document.getElementById('grid-lines').addEventListener('click', function () {
        showGridLines = !showGridLines;
        if (showGridLines) {

        } else {

        }
    });
};

function getColor(cnt){
    colors=["antiquewhite", "aquamarine", "aliceblue", "greenyellow","lavender", "lightgreen"];
    return colors[cnt% colors.length];
}