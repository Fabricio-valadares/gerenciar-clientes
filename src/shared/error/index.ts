class AppError {
    public readonly status: number;
    public readonly message: string;

    constructor(message: string, status: number){
        this.status = status
        this.message = message
    }
}

export { AppError }
