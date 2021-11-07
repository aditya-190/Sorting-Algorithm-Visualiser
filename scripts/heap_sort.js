function helperFunction(size, currentLargest) {
    let largest = currentLargest, left = 2 * currentLargest + 1, right = 2 * currentLargest + 2;

    if (left < size && singleBarSize[left] > singleBarSize[largest]) {
        if (largest !== currentLargest)
            barsUpdater(divsArray[left], singleBarSize[left], "blue");

        largest = left;
        barsUpdater(divsArray[left], singleBarSize[left], "red");
    }
    if (right < size && singleBarSize[right] > singleBarSize[largest]) {
        if (largest !== currentLargest)
            barsUpdater(divsArray[right], singleBarSize[right], "blue");

        largest = right;
        barsUpdater(divsArray[right], singleBarSize[right], "red");
    }

    if (largest !== currentLargest) {
        barsUpdater(divsArray[currentLargest], singleBarSize[currentLargest], "red");
        barsUpdater(divsArray[largest], singleBarSize[largest], "red");

        let temporary = singleBarSize[currentLargest];
        singleBarSize[currentLargest] = singleBarSize[largest];
        singleBarSize[largest] = temporary

        barsUpdater(divsArray[currentLargest], singleBarSize[currentLargest], "red");
        barsUpdater(divsArray[largest], singleBarSize[largest], "red");

        barsUpdater(divsArray[currentLargest], singleBarSize[currentLargest], "blue");
        barsUpdater(divsArray[largest], singleBarSize[largest], "blue");

        helperFunction(size, largest);
    }
}

function heapSort() {
    let size = totalBars;
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--)
        helperFunction(size, i);

    for (let i = size - 1; i > 0; i--) {
        barsUpdater(divsArray[0], singleBarSize[0], "red");
        barsUpdater(divsArray[i], singleBarSize[i], "red");

        let temporary = singleBarSize[0];
        singleBarSize[0] = singleBarSize[i];
        singleBarSize[i] = temporary;

        barsUpdater(divsArray[0], singleBarSize[0], "red");
        barsUpdater(divsArray[i], singleBarSize[i], "red");

        barsUpdater(divsArray[0], singleBarSize[0], "blue");
        barsUpdater(divsArray[i], singleBarSize[i], "blue");

        barsUpdater(divsArray[i], singleBarSize[i], "green");
        barsUpdater(divsArray[i], singleBarSize[i], "yellow");

        helperFunction(i, 0);

        barsUpdater(divsArray[i], singleBarSize[i], "blue");
        barsUpdater(divsArray[i], singleBarSize[i], "green");
    }
    barsUpdater(divsArray[0], singleBarSize[0], "green");
}