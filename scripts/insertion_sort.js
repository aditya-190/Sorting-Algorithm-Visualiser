function insertionSort() {
    for (let i = 1; i < totalBars; i++) {
        let currentSelected = singleBarSize[i], j = i - 1;
        while (j >= 0 && singleBarSize[j] > currentSelected) {
            singleBarSize[j + 1] = singleBarSize[j];
            j = j - 1;
        }
        singleBarSize[j + 1] = currentSelected;
    }
    enableButtons();
}