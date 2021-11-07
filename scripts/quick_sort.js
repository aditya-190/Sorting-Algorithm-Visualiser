function quickSort(start, end) {
    if (start < end) {
        let pivot = divide(start, end);
        quickSort(start, pivot - 1);
        quickSort(pivot + 1, end);
    }

    enableButtons();
}

function divide(lowerBound, upperBound) {
    let pivot = singleBarSize[lowerBound], start = lowerBound, end = upperBound;

    while (start < end) {
        while (singleBarSize[start] <= pivot) start++;
        while (singleBarSize[end] > pivot) end--;

        if (start < end) {
            let temporary = singleBarSize[start];
            singleBarSize[start] = singleBarSize[end]
            singleBarSize[end] = temporary;
        }
    }

    let temporary = singleBarSize[lowerBound];
    singleBarSize[lowerBound] = singleBarSize[end]
    singleBarSize[end] = temporary;

    return end;
}