export class ConflictError extends Error {
  private status;

  constructor(message: string) {
    super(message);
    this.name = "ConflictError";
    this.status = 409;
  }
}
