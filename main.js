const CHANGE_SPEED = "Change Speed";
const CHANGE_SIZE = "Change Size";
const GENERATE_NEW_ARRAY = "Generate New Array";
const GO = "Go";

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
        let itemPos;
        if ($(this).text() === CHANGE_SPEED) {
            itemPos = $(this).parent().position();
            $("#change_speed").css("display", "block")
            $("#change_size").css("display", "none")
        } else if($(this).text() === CHANGE_SIZE) {
            itemPos = $(this).parent().position();
            $("#change_size").css("display", "block")
            $("#change_speed").css("display", "none")
        } else{
            itemPos = $(this).position();
            $("#change_speed").css("display", "none")
            $("#change_size").css("display", "none")
        }

        activeTab.removeClass("active");
        $(this).addClass('active');
        $(".selector").css({
            "left": itemPos.left + "px",
            "width": activeWidth + "px"
        });

        switch ($(this).text()) {
            case CHANGE_SPEED: {
                changeSpeed()
                break;
            }
            case CHANGE_SIZE: {
                changeSize()
                break;
            }
            case GENERATE_NEW_ARRAY: {
                generateArray()
                break;
            }
            case GO: {
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