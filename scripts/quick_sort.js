function quickSort(start, end) {
    if (start < end) {
        let pi = divide(start, end);
        quickSort(start, pi - 1);
        quickSort(pi + 1, end);
    }
}

function divide(low, high) {
    let pivot = singleBarSize[high];
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {
        if (singleBarSize[j] < pivot) {
            i++;

            let temporary = singleBarSize[i];
            singleBarSize[i] = singleBarSize[j]
            singleBarSize[j] = temporary;
        }
    }
    let temporary = singleBarSize[i + 1];
    singleBarSize[i + 1] = singleBarSize[high]
    singleBarSize[high] = temporary;
    return (i + 1);
}