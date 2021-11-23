function quickSort(start, end) {
    quickSortMain(start, end);

    for (let i = start; i <= end; i++)
        barsUpdater(divsArray[i], singleBarSize[i], "green");
}

function quickSortMain(start, end) {
    if (start < end) {
        let pivot = divide(start, end);
        quickSortMain(start, pivot - 1);
        quickSortMain(pivot + 1, end);
    }
}

function divide(lowerBound, upperBound) {
    let pivot = singleBarSize[lowerBound], start = lowerBound, end = upperBound;

    barsUpdater(divsArray[lowerBound], singleBarSize[lowerBound], "yellow");

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

    barsUpdater(divsArray[end], singleBarSize[end], "green");

    return end;
}