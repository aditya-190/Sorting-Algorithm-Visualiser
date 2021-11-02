const CHANGE_SPEED = "Change Speed";
const CHANGE_SIZE = "Change Size";
const GENERATE_NEW_ARRAY = "Generate New Array";
const GO = "Go";
const SELECTION_SORT = "Selection";
const INSERTION_SORT = "Insertion";
const BUBBLE_SORT = "Bubble";
const MERGE_SORT = "Merge";
const QUICK_SORT = "Quick";
const HEAP_SORT = "Heap";

const tabs = $('.tabs');
const activeItem = tabs.find('.active');
const activeWidth = activeItem.innerWidth();
const sizeSlider = $("#size_slider");
const speedSlider = $("#speed_slider");
const content = $("#mainContent");
content.css("flex-direction", "row");

let totalBars = sizeSlider.val();
let singleBarSize = [];
let divsArray = [];
let spaceBetweenBars = 0.1;

let speedOfAlgorithm = speedSlider.val();
let totalDelayTime = 10000 / (Math.floor(totalBars / 10) * speedOfAlgorithm);
let currentDelayTime = 0;
let algorithmRunning = false;

changeHeading(activeItem.text() + " Sort");
defaultActiveBarPosition();
clickListeners();
generateArray();

function changeHeading(heading) {
    $(".heading").text(heading);
}

function defaultActiveBarPosition() {
    $(".selector").css({
        "left": activeItem.position.left + "px",
        "width": activeWidth + "px"
    });
}

function clickListeners() {
    $(".tabs").on("click", "a", function (e) {
        if (!algorithmRunning) {
            e.preventDefault();
            const activeTab = $('.tabs a');
            const activeWidth = $(this).innerWidth();
            let itemPos;
            if ($(this).text() === CHANGE_SPEED) {
                itemPos = $(this).parent().position();
                $("#change_speed").css("display", "block");
                $("#change_size").css("display", "none");
            } else if ($(this).text() === CHANGE_SIZE) {
                itemPos = $(this).parent().position();
                $("#change_size").css("display", "block");
                $("#change_speed").css("display", "none");
            } else {
                itemPos = $(this).position();
                $("#change_speed").css("display", "none");
                $("#change_size").css("display", "none");
            }

            activeTab.removeClass("active");
            $(this).addClass('active');
            $(".selector").css({
                "left": itemPos.left + "px",
                "width": activeWidth + "px"
            });

            switch ($(this).text()) {
                case CHANGE_SPEED: {
                    break;
                }
                case CHANGE_SIZE: {
                    break;
                }
                case GENERATE_NEW_ARRAY: {
                    generateArray();
                    break;
                }
                case GO: {
                    startAlgorithmVisualisation($(".heading").text())
                    break;
                }

                default: {
                    changeHeading($(this).text() + " Sort");
                    break;
                }
            }
        }
    });

    $(document).on('input', '#speed_slider', function () {
        updateSpeed($(this).val());
    });

    $(document).on('input', '#size_slider', function () {
        if (!algorithmRunning) {
            updateSize($(this).val());
        }
    });
}

function generateArray() {
    content.empty();

    for (let i = 0; i < totalBars; i++) {
        singleBarSize[i] = Math.floor(Math.random() * 0.5 * (sizeSlider.attr('max') - sizeSlider.attr('min'))) + 10;
        divsArray[i] = $('<div></div>');
        content.append(divsArray[i]);
        divsArray[i].css({
                "margin": "0% " + spaceBetweenBars + "%",
                "background": "linear-gradient(45deg, #05abe0 0%, #8200f4 100%)",
                "filter": "gradient(startColorstr='#05abe0', endColorstr='#8200f4', GradientType=1)",
                "width": (100 / totalBars - (2 * spaceBetweenBars)) + "%",
                "height": singleBarSize[i] + "%",
                "border-radius": "0 0 32px 32px"
            }
        );
    }
}

function updateSize(changedSize) {
    totalBars = changedSize;
    generateArray();
}

function updateSpeed(changedSpeed) {
    speedOfAlgorithm = changedSpeed;
    switch (parseInt(speedOfAlgorithm)) {
        case 1:
            speedOfAlgorithm = 1;
            break;
        case 2:
            speedOfAlgorithm = 10;
            break;
        case 3:
            speedOfAlgorithm = 100;
            break;
        case 4:
            speedOfAlgorithm = 1000;
            break;
        case 5:
            speedOfAlgorithm = 10000;
            break;
    }
}

function enableButtons() {
    algorithmRunning = false;
}

function startAlgorithmVisualisation(algorithm = SELECTION_SORT) {
    algorithmRunning = true;
    switch (algorithm) {
        case SELECTION_SORT + " Sort": {
            selectionSort();
            break;
        }
        case INSERTION_SORT + " Sort": {
            insertionSort()
            break;
        }
        case BUBBLE_SORT + " Sort": {
            bubbleSort()
            break;
        }
        case MERGE_SORT + " Sort": {
            mergeSort()
            break;
        }
        case QUICK_SORT + " Sort": {
            quickSort()
            break;
        }
        case HEAP_SORT + " Sort": {
            heapSort()
            break;
        }
        default: {
            selectionSort();
            break;
        }
    }
}

function barsUpdater(content, height, color) {
    window.setTimeout(function () {
        content.css({
            "margin": "0% " + spaceBetweenBars + "%",
            "width": (100 / totalBars - (2 * spaceBetweenBars)),
            "height": height,
            "background-color": color
        });
    }, currentDelayTime += totalDelayTime);
}