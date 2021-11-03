function bubbleSort() {
    for (let i = 0; i < totalBars; i++) {
        for (let j = 0; j < totalBars - i; j++) {
            if (singleBarSize[j] > singleBarSize[j + 1]) {
                let temporary = singleBarSize[j];
                singleBarSize[j] = singleBarSize[j + 1];
                singleBarSize[j + 1] = temporary;
            }
        }
    }
    enableButtons();
}