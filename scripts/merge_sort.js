function merge(start, middle, end) {
    let firstSize = middle - start + 1, secondSize = end - middle, leftArray = [], rightArray = [];

    for (let i = 0; i < firstSize; i++) leftArray[i] = singleBarSize[start + i];
    for (let i = 0; i < secondSize; i++) rightArray[i] = singleBarSize[middle + 1 + i];

    let i = 0, j = 0, k = start;

    while (i < firstSize && j < secondSize) {
        if (leftArray[i] <= rightArray[j]) singleBarSize[k++] = leftArray[i++];
        else singleBarSize[k++] = rightArray[j++];
    }

    while (i < firstSize) singleBarSize[k++] = leftArray[i++];
    while (j < secondSize) singleBarSize[k++] = rightArray[j++];
}

function mergeSort(start, end) {
    if (start >= end) return;

    let middle = Math.floor((start + end) / 2);
    mergeSort(start, middle);
    mergeSort(middle + 1, end);
    merge(start, middle, end);
}