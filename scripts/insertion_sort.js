function insertionSort() {
    for (let i = 1; i < totalBars; i++) {
        let currentSelected = singleBarSize[i], j = i - 1;
        barsUpdater(divsArray[i], singleBarSize[i], "yellow")

        while (j >= 0) {
            barsUpdater(divsArray[j], singleBarSize[j], "yellow")

            if (singleBarSize[j] > currentSelected) {
                barsUpdater(divsArray[j], singleBarSize[j], "red")
                barsUpdater(divsArray[j + 1], singleBarSize[j + 1], "red")

                singleBarSize[j + 1] = singleBarSize[j];

                barsUpdater(divsArray[j], singleBarSize[j], "red")
                barsUpdater(divsArray[j + 1], singleBarSize[j + 1], "red")
                barsUpdater(divsArray[j], singleBarSize[j], "blue")
                barsUpdater(divsArray[j + 1], singleBarSize[j + 1], "blue")
                j--;
            } else {
                barsUpdater(divsArray[j], singleBarSize[j], "blue")
                break;
            }
        }
        singleBarSize[j + 1] = currentSelected;

        for (let temporary = 0; temporary < i; temporary++)
            barsUpdater(divsArray[temporary], singleBarSize[temporary], "green")
    }
    barsUpdater(divsArray[totalBars - 1], singleBarSize[totalBars - 1], "green")

    enableButtons();
}