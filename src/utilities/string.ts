export function sortAlphabetically(
  array: string[],
  options: { isDescending: boolean; locale: string },
): string[] {
  const { isDescending = false, locale } = options || {};
  const localeString = locale.replace('_', '-');
  const collator = new Intl.Collator(localeString);

  const result = array
    .slice(0)
    .sort((a: string, b: string): number =>
      isDescending ? collator.compare(b, a) : collator.compare(a, b),
    );

  return result;
}

interface GenericObject {
  [key: string]: string;
}

export const sortObjectListAlphabetically = (
  array: GenericObject[],
  options: { property: string; isDescending: boolean; locale: string },
): GenericObject[] => {
  const { property, isDescending, locale } = options || {};
  const localeString = locale.replace('_', '-');
  const collator = new Intl.Collator(localeString);

  return array.sort((a: GenericObject, b: GenericObject): number =>
    isDescending
      ? collator.compare(b[property].trim(), a[property].trim())
      : collator.compare(a[property].trim(), b[property].trim()),
  );
};

export function leftPad(
  value: string | number,
  padLength = 2,
  padString = '0',
): string {
  const padding = Array(padLength + 1).join(padString);
  const stringValue = String(value);

  return padding.substring(0, padLength - stringValue.length) + stringValue;
}

export function getUpperCaseFirstLetterString(value: string): string {
  if (value.length) {
    const splittedStringArray = value.split(' ');
    const upperCaseArray = splittedStringArray.map((entry) => {
      const firstLetterUpperCase = entry[0].toUpperCase();

      return firstLetterUpperCase + entry.slice(1);
    });

    return upperCaseArray.join(' ');
  }

  return value;
}

export function dashCaseToCamelCase(name: string): string {
  return name.replace(/-([a-z])/g, (match) => match[1].toUpperCase());
}

export function toBaseCharactersForLocale(str: string, locale: string): string {
  // https://stackoverflow.com/questions/52033497/language-specific-chars-base-letter-and-sorting/52040000#52040000
  locale = locale.replace('_', '-');
  const match = (letter: string): string => {
    const letterMatch = (normalizedLetter: string): boolean => {
      const location = new Intl.Collator(locale, {
        usage: 'search',
        sensitivity: 'base',
      }).compare(letter, normalizedLetter);

      return location === 0;
    };

    const normalizedLetter = letter
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/gi, '');
    if (letterMatch(normalizedLetter)) {
      return normalizedLetter;
    }
    return letter;
  };

  return str.replace(/[^u0000-u007E]/g, match);
}

interface Range {
  min?: number;
  max?: number;
}

export function generateRangeString(range?: Range): string {
  const { min, max } = range || {};

  const rangeString = [
    ...(min !== undefined ? [min] : []),
    ...(min !== undefined || max !== undefined ? ['-'] : []),
    ...(max !== undefined ? [max] : []),
  ].join(' ');

  return `(${rangeString})`;
}

export const ellipsifyString = (value: string, limit: number): string => {
  if (value.length <= limit) return value;

  return `${value.slice(0, limit)}...`;
};

export default {
  sortAlphabetically,
  getUpperCaseFirstLetterString,
  toBaseCharactersForLocale,
  ellipsifyString,
};
