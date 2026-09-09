function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}


(window as unknown as { subtract: typeof subtract }).subtract = subtract;
(window as unknown as { multiply: typeof multiply }).multiply = multiply;
(window as unknown as { divide: typeof divide }).divide = divide;