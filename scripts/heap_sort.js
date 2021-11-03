function helperFunction(size, currentLargest) {
    let largest = currentLargest, left = 2 * currentLargest + 1, right = 2 * currentLargest + 2;

    if (left < size && singleBarSize[left] > singleBarSize[largest]) largest = left;
    if (right < size && singleBarSize[right] > singleBarSize[largest]) largest = right;

    if (largest !== currentLargest) {
        let temporary = singleBarSize[currentLargest];
        singleBarSize[currentLargest] = singleBarSize[largest];
        singleBarSize[largest] = temporary
        helperFunction(size, largest);
    }
}

function heapSort() {
    let size = totalBars;
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--)
        helperFunction(size, i);

    for (let i = size - 1; i > 0; i--) {
        let temporary = singleBarSize[0];
        singleBarSize[0] = singleBarSize[i];
        singleBarSize[i] = temporary;
        helperFunction(i, 0);
    }
}