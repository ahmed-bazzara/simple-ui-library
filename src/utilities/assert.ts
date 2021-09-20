const assert: (value: unknown, message?: string) => asserts value = (
  value,
  message,
) => {
  if (!value) {
    throw new Error(
      message ??
        `AssertionError: Expected value to not be falsy, instead receieved "${value}".`,
    );
  }
};

export default assert;
