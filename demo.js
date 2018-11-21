var per = 0;

var timer = setInterval(function () {
    $(".bar").css("width", per + "%");
    per += 1;
    if (per > 100) {
        $(".pageLoading").addClass("complete");
        setTimeout(function () {
            $(".monsterText").html("Welcome<br>APP<br>problem");
        }, 3000);
        clearInterval(timer);
    }
}, 30);
