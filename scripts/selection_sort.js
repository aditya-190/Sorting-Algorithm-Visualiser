function selectionSort() {
    for (let i = 0; i < totalBars; i++) {
        barsUpdater(divsArray[i], singleBarSize[i], "red");
        let minimumIndex = i;

        for (let j = i + 1; j < totalBars; j++) {
            barsUpdater(divsArray[j], singleBarSize[j], "yellow");
            if (singleBarSize[j] < singleBarSize[minimumIndex]) {
                if (minimumIndex !== i) {
                    barsUpdater(divsArray[minimumIndex], singleBarSize[minimumIndex], "blue");
                }
                minimumIndex = j;
                barsUpdater(divsArray[minimumIndex], singleBarSize[minimumIndex], "red");
            } else {
                barsUpdater(divsArray[j], singleBarSize[j], "blue");
            }
        }

        if (minimumIndex !== i) {
            let temporary = singleBarSize[minimumIndex];
            singleBarSize[minimumIndex] = singleBarSize[i];
            singleBarSize[i] = temporary;

            barsUpdater(divsArray[minimumIndex], singleBarSize[minimumIndex], "red");
            barsUpdater(divsArray[minimumIndex], singleBarSize[minimumIndex], "blue");
            barsUpdater(divsArray[i], singleBarSize[i], "red");
        }

        barsUpdater(divsArray[i], singleBarSize[i], "green");
    }
}