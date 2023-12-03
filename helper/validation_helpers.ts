export class ValidationHelper {
    static isValidString(value: any): boolean {
        return (
            value === null ||
            value === undefined ||
            (typeof value === 'string' && value.trim() !== '')
        );
    }

    static isValidNumber(value: any): boolean {
        return value === null || value === undefined || typeof value === 'number';
    }

    static isValidBoolean(value: any): boolean {
        return value === null || value === undefined || typeof value === 'boolean';
    }

    static isValidArray(value: any): boolean {
        return (
            value === null ||
            value === undefined ||
            (Array.isArray(value) && value.every((item) => item !== null && item !== undefined))
        );
    }

    static isValidEmail(value: any): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return (
            value === null ||
            value === undefined ||
            (typeof value === 'string' && emailRegex.test(value))
        );
    }
}
