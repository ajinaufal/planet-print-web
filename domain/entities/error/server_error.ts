export class ErrorHandler extends Error {
    status: number;
    constructor(status: number, message: string, name?: string) {
        super(message);
        this.name = name || 'Server Error';
        this.status = status || 500;
    }
}
