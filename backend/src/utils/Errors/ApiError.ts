class ApiError extends Error {
    statusCode: number;
    data: any; // You can specify a more precise type based on your use case
    success: boolean;
    errors: any[]; // You can specify a more precise type based on your use case

    constructor(
        statusCode: number,
        message: string = "Something went wrong",
        errors: any[] = [],
        stack?: string
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
