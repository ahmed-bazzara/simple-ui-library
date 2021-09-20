export class ValidationResult {
  /* eslint-disable lines-between-class-members */
  private error: boolean;

  private warning: boolean;

  private errorMessages: string[];

  private warningMessages: string[];
  /* eslint-enable lines-between-class-members */

  public constructor(
    error = false,
    warning = false,
    errorMessages: string[] = [],
    warningMessages: string[] = [],
  ) {
    this.error = error;
    this.warning = warning;
    this.errorMessages = errorMessages;
    this.warningMessages = warningMessages;
  }

  public hasError = (): boolean => this.error;

  public hasWarning = (): boolean => this.warning;

  public getErrorMessages = (): string[] => this.errorMessages;

  public getWarningMessages = (): string[] => this.warningMessages;

  public setError = (message?: string): void => {
    this.error = true;
    message !== undefined && this.errorMessages.push(message);
  };

  public setWarning = (message?: string): void => {
    this.warning = true;
    message !== undefined && this.warningMessages.push(message);
  };

  public clone = (): ValidationResult =>
    new ValidationResult(
      this.error,
      this.warning,
      this.errorMessages,
      this.warningMessages,
    );
}
