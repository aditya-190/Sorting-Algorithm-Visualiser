function insertionSort() {
    for (let i = 1; i < totalBars; i++) {
        let currentSelected = singleBarSize[i], j = i - 1;
        barsUpdater(divsArray[i], singleBarSize[i], "yellow")

        while (j >= 0 && singleBarSize[j] > currentSelected) {
            barsUpdater(divsArray[j], singleBarSize[j], "yellow")
            barsUpdater(divsArray[j], singleBarSize[j], "red")
            barsUpdater(divsArray[j + 1], singleBarSize[j + 1], "red")

            singleBarSize[j + 1] = singleBarSize[j];

            barsUpdater(divsArray[j], singleBarSize[j], "red")
            barsUpdater(divsArray[j + 1], singleBarSize[j + 1], "red")
            j = j - 1;
        }
        singleBarSize[j + 1] = currentSelected;
    }

    enableButtons();
}