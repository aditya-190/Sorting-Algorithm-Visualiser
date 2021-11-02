// Constants
const CHANGE_SPEED = "Change Speed";
const CHANGE_SIZE = "Change Size";
const GENERATE_NEW_ARRAY = "Generate New Array";
const GO = "Go";

// Navigation Bar - Starts
const tabs = $('.tabs');
const activeItem = tabs.find('.active');
const activeWidth = activeItem.innerWidth();

changeHeading(activeItem.text() + " Sort");

function changeHeading(heading) {
    $(".heading").text(heading);
}

defaultActiveBarPosition();

function defaultActiveBarPosition() {
    $(".selector").css({
        "left": activeItem.position.left + "px",
        "width": activeWidth + "px"
    });
}

clickListeners();

function clickListeners() {
    $(".tabs").on("click", "a", function (e) {
        e.preventDefault();
        const activeTab = $('.tabs a');
        const activeWidth = $(this).innerWidth();
        let itemPos;
        if ($(this).text() === CHANGE_SPEED) {
            itemPos = $(this).parent().position();
            $("#change_speed").css("display", "block")
            $("#change_size").css("display", "none")
        } else if ($(this).text() === CHANGE_SIZE) {
            itemPos = $(this).parent().position();
            $("#change_size").css("display", "block")
            $("#change_speed").css("display", "none")
        } else {
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

    $(document).on('input', '#speed_slider', function () {
        updateSpeed($(this).val());
    });

    $(document).on('input', '#size_slider', function () {
        updateSize($(this).val());
    });
}

// Navigation Bar - Ends


// Generate Array - Starts
const sizeSlider = $("#size_slider");
let totalBars = sizeSlider.val()
let singleBarSize = [];
let divsArray = [];
let spaceBetweenBars = 0.1;

const content = $("#mainContent");
content.css("flex-direction", "row");

generateArray()

function generateArray() {
    content.empty();

    for (let i = 0; i < totalBars; i++) {
        singleBarSize[i] = Math.floor(Math.random() * 0.5 * (sizeSlider.attr('max') - sizeSlider.attr('min'))) + 10;
        divsArray[i] = $('<div></div>');
        content.append(divsArray[i]);
        divsArray[i].css({
                "margin": "0% " + spaceBetweenBars + "%",
                "background": "#05abe0",
                "background": "-moz-linear-gradient(45deg, #05abe0 0%, #8200f4 100%)",
                "background": "-webkit-linear-gradient(45deg, #05abe0 0%, #8200f4 100%)",
                "background": "linear-gradient(45deg, #05abe0 0%, #8200f4 100%)",
                "filter": "gradient(startColorstr='#05abe0', endColorstr='#8200f4', GradientType=1)",
                "width": (100 / totalBars - (2 * spaceBetweenBars)) + "%",
                "height": singleBarSize[i] + "%"
            }
        );
    }
}

// Generate Array - Ends


function updateSize(changedSize) {
    totalBars = changedSize
    generateArray()
}

function updateSpeed(changedSpeed) {
}

function changeSpeed() {
}

function changeSize() {
}

function startAlgorithmVisualisation() {
}