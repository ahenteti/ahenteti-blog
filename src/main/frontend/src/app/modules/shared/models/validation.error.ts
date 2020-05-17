export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    // Set the prototype explicitly.
    // reference: https://stackoverflow.com/questions/41102060/typescript-extending-error-class
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
