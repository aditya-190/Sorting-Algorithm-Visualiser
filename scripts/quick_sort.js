function quickSort(start, end) {
    if (start < end) {
        let pivot = divide(start, end);
        quickSort(start, pivot - 1);
        quickSort(pivot + 1, end);
    }
}

function divide(lowerBound, upperBound) {
    let pivot = singleBarSize[lowerBound], j = lowerBound + 1;

    barsUpdater(divsArray[lowerBound], singleBarSize[lowerBound], "yellow");

    for (let i = lowerBound + 1; i <= upperBound; i++) {
        if (singleBarSize[i] < pivot) {
            barsUpdater(divsArray[i], singleBarSize[i], "yellow");

            barsUpdater(divsArray[j], singleBarSize[j], "red");
            barsUpdater(divsArray[i], singleBarSize[i], "red");

            let temporary = singleBarSize[j];
            singleBarSize[j] = singleBarSize[i];
            singleBarSize[i] = temporary;

            barsUpdater(divsArray[j], singleBarSize[j], "red");
            barsUpdater(divsArray[i], singleBarSize[i], "red");

            barsUpdater(divsArray[j], singleBarSize[j], "blue");
            barsUpdater(divsArray[i], singleBarSize[i], "blue");

            j++;
        }
    }

    barsUpdater(divsArray[lowerBound], singleBarSize[lowerBound], "red");
    barsUpdater(divsArray[j - 1], singleBarSize[j - 1], "red");

    let temporary = singleBarSize[lowerBound];
    singleBarSize[lowerBound] = singleBarSize[j - 1];
    singleBarSize[j - 1] = temporary;

    barsUpdater(divsArray[lowerBound], singleBarSize[lowerBound], "red");
    barsUpdater(divsArray[j - 1], singleBarSize[j - 1], "red");

    for (let temporary = lowerBound; temporary <= j; temporary++)
        barsUpdater(divsArray[temporary], singleBarSize[temporary], "green");

    return j - 1;
}