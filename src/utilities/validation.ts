import { ValidationResult } from './classes';

export function isEmpty(value?: unknown): boolean {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'string' && value.trim() === '')
  );
}

export function isNumericValue(value?: unknown): boolean {
  if (typeof value === 'number' && !isNaN(value)) {
    return true;
  }

  if (typeof value === 'string') {
    return !isNaN(parseFloat(value)) && isFinite(Number(value));
  }

  return false;
}

export function mergeValidationResults(
  validationResults: ValidationResult[],
): ValidationResult {
  const validationResult = new ValidationResult();

  validationResults.forEach((result) => {
    result.hasError() && validationResult.setError();
    result.hasWarning() && validationResult.setWarning();
  });

  validationResults.forEach((result) => {
    result
      .getErrorMessages()
      .forEach((message) => validationResult.setError(message));
    result
      .getWarningMessages()
      .forEach((message) => validationResult.setWarning(message));
  });

  return validationResult;
}

export const isOutOfRange = (
  value: number,
  options?: { min?: number; max?: number },
): boolean => {
  const { min, max } = options || {};
  let isAboveMax = false;
  let isBelowMin = false;

  if (isNumericValue(min)) {
    isBelowMin = value < (min as number);
  }

  if (isNumericValue(max)) {
    isAboveMax = value > (max as number);
  }

  return isBelowMin || isAboveMax;
};
