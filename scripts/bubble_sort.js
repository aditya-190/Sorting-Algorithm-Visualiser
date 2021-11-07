function bubbleSort() {
    for (let i = 0; i < totalBars - 1; i++) {
        for (let j = 0; j < totalBars - i - 1; j++) {
            barsUpdater(divsArray[j], singleBarSize[j], "yellow");
            barsUpdater(divsArray[j + 1], singleBarSize[j + 1], "yellow");

            if (singleBarSize[j] > singleBarSize[j + 1]) {
                barsUpdater(divsArray[j], singleBarSize[j], "red");
                barsUpdater(divsArray[j + 1], singleBarSize[j + 1], "red");

                let temporary = singleBarSize[j];
                singleBarSize[j] = singleBarSize[j + 1];
                singleBarSize[j + 1] = temporary;

                barsUpdater(divsArray[j], singleBarSize[j], "red");
                barsUpdater(divsArray[j + 1], singleBarSize[j + 1], "red");
            }
            barsUpdater(divsArray[j], singleBarSize[j], "blue");
            barsUpdater(divsArray[j + 1], singleBarSize[j + 1], "blue");
        }
        barsUpdater(divsArray[totalBars - i - 1], singleBarSize[totalBars - i - 1], "green");
    }
    barsUpdater(divsArray[0], singleBarSize[0], "green");
}