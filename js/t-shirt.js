$(document).ready(function () {

    var listColor = [
        { r: 98, g: 98, b: 98 },
        { r: 76, g: 76, b: 76 },
        { r: 55, g: 55, b: 55 },
        { r: 90, g: 90, b: 90 },
        { r: 90, g: 90, b: 90 },
        { r: 235, g: 235, b: 235 },
        { r: 255, g: 0, b: 0 },
        { r: 0, g: 255, b: 0 },
        { r: 0, g: 0, b: 255 },
    ];

    var colorPicker = $(".colorPicker")
        , canvas = $(".canvas")
        , curRgbColor = null;

    for (var i = 0; i < listColor.length; i++) {
        var item = listColor[i];
        var rgbColor = "rgb(" + item.r + "," + item.g + "," + item.b + ")";
        if (i == 6) curRgbColor = rgbColor;

        colorPicker.append("<div style='background-color: " + rgbColor + "'" + ((i == 6) ? " class='active' " : "") + "><i class='fa fa-check'></i></div>")
    }

    canvas.css("background-color", curRgbColor);

    colorPicker.delegate("div", "click", function () {
        var colorEl = $(this);
        colorPicker.find("div").each(function () {
            $(this).removeClass("active");
        });
        canvas.css("background-color", colorEl.css("background-color"));
        colorEl.addClass("active");
        curRgbColor = colorEl.css("background-color");
    });
    colorPicker.delegate("div", "mouseenter", function (event) {
        var colorEl = $(this);

        canvas.animate({
            backgroundColor: jQuery.Color(colorEl.css("background-color"))
        }, {
                queue: false,
                duration: 350
            });
    });
    colorPicker.delegate(colorPicker, "mouseleave", function () {
        canvas.stop(false, false);
        if (canvas.css("background-color") != curRgbColor) {
            canvas.animate({
                backgroundColor: jQuery.Color(curRgbColor)
            }, {
                    queue: false,
                    duration: 350
                });
        }
        //});
        //canvas.css("background-color",curRgbColor);
    });

    var paper = Raphael(document.getElementById("main-canvas"), 530, 630);
    var url_shirt = "../photos/t-shirt.jpg";
    var image = paper.image(url_shirt, 0, 0, 530, 630);

});