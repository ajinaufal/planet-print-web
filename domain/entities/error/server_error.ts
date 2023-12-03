export class ErrorHandler extends Error {
    constructor(status: number, message: string, name?: string) {
        super(message);
        this.name = name || 'Server Error';
    }
}
