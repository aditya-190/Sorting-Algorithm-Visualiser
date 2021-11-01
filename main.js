const tabs = $('.tabs');
const activeItem = tabs.find('.active');
const activeWidth = activeItem.innerWidth();

changeHeading(activeItem.text() + " Sort");
defaultActiveBarPosition();
navigationBarClickListener();

function changeHeading(heading) {
    $(".heading").text(heading);
}

function defaultActiveBarPosition() {
    $(".selector").css({
        "left": activeItem.position.left + "px",
        "width": activeWidth + "px"
    });
}

function navigationBarClickListener() {
    $(".tabs").on("click", "a", function (e) {
        e.preventDefault();
        const activeTab = $('.tabs a');
        const activeWidth = $(this).innerWidth();
        const itemPos = $(this).position();

        activeTab.removeClass("active");
        $(this).addClass('active');
        $(".selector").css({
            "left": itemPos.left + "px",
            "width": activeWidth + "px"
        });

        switch ($(this).text()) {
            case "Change Speed": {
                changeSpeed()
                break;
            }
            case "Change Size": {
                changeSize()
                break;
            }
            case "Generate New Array": {
                generateArray()
                break;
            }
            case "Go": {
                startAlgorithmVisualisation()
                break;
            }

            default: {
                changeHeading($(this).text() + " Sort");
                break;
            }
        }
    });
}

function changeSpeed() {
}

function changeSize() {
}

function generateArray() {
}

function startAlgorithmVisualisation() {
}