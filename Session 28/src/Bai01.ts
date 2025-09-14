function calculate(a: number, b: number, callback: (result: number) => void): void {
    let sum: number = a + b;
    callback(sum);
}

function printResult(result: number): void {
    console.log("Kết quả phép cộng là:", result);
}

calculate(10, 15, printResult);
