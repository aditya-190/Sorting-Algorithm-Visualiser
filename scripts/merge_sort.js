function mergeSort() {
    console.log(singleBarSize);
    divide(0, totalBars - 1);
    console.log(singleBarSize);
    enableButtons();
}

function divide(left, right) {
    if (left < right) {
        let middle = left + (right - left) / 2;
        divide(left, middle);
        divide(middle + 1, right);
        merge(left, middle, right);
    }
}

function merge(left, middle, right) {
    let i = left, j = middle + 1, k = 0, temporary = [];

    for (let l = left; l <= right; l++) {
        if (i > middle) {
            temporary[k++] = singleBarSize[j++];
        } else if (j > right) {
            temporary[k++] = singleBarSize[i++];
        } else if (singleBarSize[i] < singleBarSize[j]) {
            temporary[k++] = singleBarSize[i++];
        } else {
            temporary[k++] = singleBarSize[j++];
        }
    }

    for (let m = 0; m < k; m++) {
        singleBarSize[left++] = temporary[m];
    }
}