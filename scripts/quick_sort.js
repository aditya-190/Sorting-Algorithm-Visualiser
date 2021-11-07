function quickSort(start, end) {
    if (start < end) {
        let pivot = divide(start, end);
        quickSort(start, pivot - 1);
        quickSort(pivot + 1, end);
    }
}

function divide(lowerBound, upperBound) {
    let pivot = singleBarSize[lowerBound], start = lowerBound, end = upperBound;

    while (start < end) {
        while (singleBarSize[start] <= pivot) {
            barsUpdater(divsArray[start], singleBarSize[start], "yellow");
            barsUpdater(divsArray[start], singleBarSize[start], "blue");
            start++;
        }

        while (singleBarSize[end] > pivot) {
            barsUpdater(divsArray[end], singleBarSize[end], "yellow");
            barsUpdater(divsArray[end], singleBarSize[end], "blue");
            end--;
        }

        if (start < end) {
            barsUpdater(divsArray[start], singleBarSize[start], "red");
            barsUpdater(divsArray[end], singleBarSize[end], "red");

            let temporary = singleBarSize[start];
            singleBarSize[start] = singleBarSize[end]
            singleBarSize[end] = temporary;

            barsUpdater(divsArray[start], singleBarSize[start], "red");
            barsUpdater(divsArray[end], singleBarSize[end], "red");
            barsUpdater(divsArray[start], singleBarSize[start], "blue");
            barsUpdater(divsArray[end], singleBarSize[end], "blue");
        }
    }

    barsUpdater(divsArray[lowerBound], singleBarSize[lowerBound], "red");
    barsUpdater(divsArray[end], singleBarSize[end], "red");

    let temporary = singleBarSize[lowerBound];
    singleBarSize[lowerBound] = singleBarSize[end]
    singleBarSize[end] = temporary;

    barsUpdater(divsArray[lowerBound], singleBarSize[lowerBound], "red");
    barsUpdater(divsArray[end], singleBarSize[end], "red");

    barsUpdater(divsArray[lowerBound], singleBarSize[lowerBound], "green");
    barsUpdater(divsArray[end], singleBarSize[end], "green");

    return end;
}