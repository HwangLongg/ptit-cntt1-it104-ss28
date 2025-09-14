function processArray(arr: number[], callback: (value: number, index: number) => void): void {
    arr.forEach((value, index) => {
        setTimeout(() => {
            callback(value, index);
        }, (index + 1) * 1000);
    });
}
function printElement(value: number, index: number): void {
    console.log(`Phần tử thứ ${index + 1}: ${value}`);
}

processArray([1, 2, 3, 4, 5], printElement);
