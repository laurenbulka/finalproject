var $burger = $("#burger-icon"),
    $nav = $("nav[data-nav]"),
    $navA = $("nav[data-nav] a"),
    isVisible = !1;

    function mouseClick(){

        console.log("click");
        if(isVisible === false){
            $nav.show();
            isVisible = true;
        }
        else{
            $nav.hide();
            isVisible = false;
        }
    }

$burger.on("click", mouseClick), $navA.on("click", mouseClick);