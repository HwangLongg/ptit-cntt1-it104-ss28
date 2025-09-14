function myForEach<T>(arr: T[], callback: (element: T, index: number, array: T[]) => void): void {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

function printInfo(element: number, index: number, array: number[]): void {
    console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng:`, array);
}
const numbers: number[] = [1, 2, 3, 4, 5, 6];
myForEach(numbers, printInfo);
