function quickSort(start, end) {
    if (start < end) {
        let pivot = divide(start, end);
        quickSort(start, pivot - 1);
        quickSort(pivot + 1, end);
    }

    enableButtons();
}

function divide(start, end) {
    let pivot = singleBarSize[start];
    let i = start + 1;

    barsUpdater(divsArray[start], singleBarSize[start], "yellow");

    for (let j = start + 1; j <= end - 1; j++) {
        barsUpdater(divsArray[j], singleBarSize[j], "yellow");

        if (singleBarSize[j] < pivot) {
            barsUpdater(divsArray[i], singleBarSize[i], "red");
            barsUpdater(divsArray[j], singleBarSize[j], "red");

            let temporary = singleBarSize[i];
            singleBarSize[i] = singleBarSize[j]
            singleBarSize[j] = temporary;

            barsUpdater(divsArray[i], singleBarSize[i], "red");
            barsUpdater(divsArray[j], singleBarSize[j], "red");
            barsUpdater(divsArray[i], singleBarSize[i], "blue");
            barsUpdater(divsArray[j], singleBarSize[j], "blue");

            i++;
        } else {
            barsUpdater(divsArray[j], singleBarSize[j], "blue");
        }
    }

    barsUpdater(divsArray[start], singleBarSize[start], "red");
    barsUpdater(divsArray[i - 1], singleBarSize[i - 1], "red");

    let temporary = singleBarSize[start];
    singleBarSize[start] = singleBarSize[i - 1]
    singleBarSize[i - 1] = temporary;

    barsUpdater(divsArray[start], singleBarSize[start], "red");
    barsUpdater(divsArray[i - 1], singleBarSize[i - 1], "red");

    for (let temporary = start; temporary <= i; temporary++)
        barsUpdater(divsArray[temporary], singleBarSize[temporary], "green");

    return (i - 1);
}