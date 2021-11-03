function selectionSort() {

    console.log(singleBarSize);

    let minimumIndex = 0;
    for (let i = 0; i < totalBars; i++) {
        minimumIndex = i;

        for (let j = i + 1; j < totalBars; j++) {
            if (singleBarSize[j] < singleBarSize[minimumIndex]) {
                minimumIndex = j;
            }
        }

        let temporary = singleBarSize[minimumIndex];
        singleBarSize[minimumIndex] = singleBarSize[i];
        singleBarSize[i] = temporary;
    }

    console.log(singleBarSize);

    enableButtons();
}