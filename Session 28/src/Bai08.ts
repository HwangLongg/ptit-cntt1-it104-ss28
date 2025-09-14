function myFilter<T>(
    arr: T[],
    searchValue: T,
    callback: (element: T, searchValue: T) => boolean
): T[] {
    const result: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], searchValue)) {
            result.push(arr[i]);
        }
    }
    return result;
}
function isEqual<T>(element: T, searchValue: T): boolean {
    return element === searchValue;
}

const numbers: number[] = [1, 2, 2, 3, 4, 5, 6];

console.log(myFilter(numbers, 2, isEqual));
console.log(myFilter(numbers, 10, isEqual));
