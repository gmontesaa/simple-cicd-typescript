
declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("./operations.js");
});

describe("subtract", () => {
  it("subtracts two positive integers", () => {
    expect(window.subtract(7, 3)).toBe(4);
  });

  it("returns a negative result when b > a", () => {
    expect(window.subtract(3, 7)).toBe(-4);
  });

  it("handles zero as the neutral element", () => {
    expect(window.subtract(5, 0)).toBe(5);
    expect(window.subtract(0, 5)).toBe(-5);
  });

  it("subtracts negative numbers", () => {
    expect(window.subtract(-2, -6)).toBe(4);
  });
});

describe("multiply", () => {
  it("multiplies two positive integers", () => {
    expect(window.multiply(4, 5)).toBe(20);
  });

  it("returns 0 when one operand is 0", () => {
    expect(window.multiply(9, 0)).toBe(0);
    expect(window.multiply(0, 9)).toBe(0);
  });

  it("returns a negative result with mixed signs", () => {
    expect(window.multiply(-3, 4)).toBe(-12);
  });

  it("returns a positive result with two negatives", () => {
    expect(window.multiply(-3, -4)).toBe(12);
  });
});

describe("divide", () => {
  it("divides two positive integers exactly", () => {
    expect(window.divide(10, 2)).toBe(5);
  });

  it("returns a decimal when the division is not exact", () => {
    expect(window.divide(7, 2)).toBe(3.5);
  });

  it("returns 0 when the dividend is 0", () => {
    expect(window.divide(0, 8)).toBe(0);
  });

  it("divides negative numbers", () => {
    expect(window.divide(-9, 3)).toBe(-3);
    expect(window.divide(-9, -3)).toBe(3);
  });

  it("throws an error when dividing by zero", () => {
    expect(() => window.divide(5, 0)).toThrow("Division by zero is not allowed");
  });

  it("throws an error when dividing zero by zero", () => {
    expect(() => window.divide(0, 0)).toThrow(Error);
  });
});

export {};