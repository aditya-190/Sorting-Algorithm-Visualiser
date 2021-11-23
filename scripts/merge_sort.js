function merge(start, middle, end) {
    let firstSize = middle - start + 1, secondSize = end - middle, leftArray = [], rightArray = [];

    for (let i = 0; i < firstSize; i++) {
        leftArray[i] = singleBarSize[start + i];
        barsUpdater(divsArray[start + i], singleBarSize[start + i], "red");
    }

    for (let i = 0; i < secondSize; i++) {
        rightArray[i] = singleBarSize[middle + 1 + i];
        barsUpdater(divsArray[middle + 1 + i], singleBarSize[middle + 1 + i], "red");
    }

    let i = 0, j = 0, k = start;

    while (i < firstSize && j < secondSize) {
        if (leftArray[i] <= rightArray[j]) {
            singleBarSize[k++] = leftArray[i++];
            barsUpdater(divsArray[k - 1], singleBarSize[k - 1], "green");
        } else {
            singleBarSize[k++] = rightArray[j++];
            barsUpdater(divsArray[k - 1], singleBarSize[k - 1], "green");
        }
    }

    while (i < firstSize) {
        singleBarSize[k++] = leftArray[i++];
        barsUpdater(divsArray[k - 1], singleBarSize[k - 1], "green");
    }
    while (j < secondSize) {
        singleBarSize[k++] = rightArray[j++];
        barsUpdater(divsArray[k - 1], singleBarSize[k - 1], "green");
    }
}

function mergeSort(start, end) {
    if (start >= end) return;

    let middle = Math.floor((start + end) / 2);
    barsUpdater(divsArray[middle], singleBarSize[middle], "yellow");

    mergeSort(start, middle);
    mergeSort(middle + 1, end);
    merge(start, middle, end);
}