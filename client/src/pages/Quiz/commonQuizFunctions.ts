export const convertNumberToChar = (n: number) => String.fromCharCode(65 + n);
export const convertCharToNumber = (c: string) => c.charCodeAt(0) - 65;
