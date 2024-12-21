// String Utilities

/**
 * Converts a string to title case (first letter of each word capitalized).
 * @param {string} str - The input string.
 * @returns {string} - The input string converted to title case.
 */
const toTitleCase = (str) =>
  str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

/**
 * Reverses the characters in a string.
 * @param {string} str - The input string.
 * @returns {string} - The reversed string.
 */
const reverse = (str) => str.split("").reverse().join("");

/**
 * Checks if a string contains a substring, ignoring case.
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @returns {boolean} - `true` if the substring is found, otherwise `false`.
 */
const containsIgnoreCase = (str, substr) =>
  str.toLowerCase().includes(substr.toLowerCase());

/**
 * Truncates a string to a specified length and appends an ellipsis if truncated.
 * @param {string} str - The input string.
 * @param {number} maxLength - The maximum allowed length.
 * @param {string} [ellipsis="..."] - The ellipsis to append (default is "…").
 * @returns {string} - The truncated string with ellipsis if necessary.
 */
const truncate = (str, maxLength, ellipsis = "...") =>
  str.length > maxLength ? str.slice(0, maxLength) + ellipsis : str;

/**
 * Converts a string to snake_case (lowercase with underscores).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to snake_case.
 */
const toSnakeCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, "$1_$2").replace(/\s+/g, "_").toLowerCase();

/**
 * Converts a string to PascalCase (capitalized words without spaces).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to PascalCase.
 */
const toPascalCase = (str) =>
  str.trim().toLowerCase().replace(/(?:^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, (_, letter) => letter.toUpperCase());

/**
 * Converts a string to camelCase (lowercase first word, then capitalized words).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to camelCase.
 */
const toCamelCase = (str) => toPascalCase(str).replace(/^./, char => char.toLowerCase());

/**
 * Converts a string to kebab-case (lowercase with hyphens).
 * @param {string} str - The input string.
 * @returns {string} - The string converted to kebab-case.
 */
const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, "-").toLowerCase();

// Export String utilities
module.exports.StringUtils = {
  toTitleCase,
  reverse,
  containsIgnoreCase,
  truncate,
  toSnakeCase,
  toPascalCase,
  toCamelCase,
  toKebabCase,
};

// Array Utilities

/**
 * Splits an array into chunks of the specified size.
 * @param {Array} arr - The array to chunk.
 * @param {number} size - The size of each chunk.
 * @returns {Array[]} - An array of chunks.
 * @throws {Error} - Throws an error if the size is less than or equal to 0.
 */
const chunk = (arr, size) => {
  if (size <= 0) throw new Error("Chunk size must be greater than 0");
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
};

/**
 * Calculates the average of numbers in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The average of the numbers, or 0 if the array is empty.
 */
const average = (arr) => (arr.length ? arr.reduce((sum, num) => sum + num, 0) / arr.length : 0);

/**
 * Returns a new array with unique elements.
 * @param {Array} arr - The input array.
 * @returns {Array} - A new array with unique elements.
 */
const unique = (arr) => [...new Set(arr)];

/**
 * Flattens a nested array into a single array.
 * @param {Array} arr - The array to flatten.
 * @returns {Array} - A new flattened array.
 */
const flatten = (arr) =>
  arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flatten(item) : item), []);

/**
 * Groups an array by a callback function.
 * @param {Array} arr - The array to group.
 * @param {Function} callback - A function that generates the key for each element.
 * @returns {Object} - An object with keys generated by the callback and values as arrays of grouped elements.
 */
const groupBy = (arr, callback) =>
  arr.reduce((acc, item) => {
    const key = callback(item);
    (acc[key] = acc[key] || []).push(item);
    return acc;
  }, {});

// Export Array utilities
module.exports.ArrayUtils = {
  chunk,
  average,
  unique,
  flatten,
  groupBy,
};

// Object Utilities

/**
 * Creates a deep clone of an object.
 * @param {Object} obj - The object to clone.
 * @returns {Object} - A deep copy of the object.
 */
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

/**
 * Merges two objects deeply, with the second object overwriting the first where keys overlap.
 * @param {Object} obj1 - The first object.
 * @param {Object} obj2 - The second object.
 * @returns {Object} - A new object that is the deep merge of the two objects.
 */
const merge = (obj1, obj2) => {
  const mergeDeep = (target, source) => {
    for (const key in source) {
      if (source[key] && typeof source[key] === "object") {
        target[key] = mergeDeep(target[key] || {}, source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  };
  return mergeDeep(obj1, obj2);
};

// Export Object utilities
module.exports.ObjectUtils = {
  deepClone,
  merge,
};

// Number Utilities

/**
 * Clamps a number between a minimum and maximum value.
 * @param {number} num - The number to clamp.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - The clamped number.
 */
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

/**
 * Checks if a number is prime.
 * @param {number} num - The number to check.
 * @returns {boolean} - `true` if the number is prime, otherwise `false`.
 */
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

/**
 * Converts a number to its ordinal representation (1st, 2nd, 3rd, etc.).
 * @param {number} num - The number to convert.
 * @returns {string} - The ordinal representation of the number.
 */
const toOrdinal = (num) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const value = num % 100;
  return num + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
};

/**
 * Converts a number to Roman numeral representation.
 * @param {number} num - The number to convert.
 * @returns {string} - The Roman numeral representation of the number.
 */
const toRoman = (num) => {
  if (num <= 0) return "";
  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  return romanNumerals.reduce((result, [letter, value]) => {
    while (num >= value) {
      result += letter;
      num -= value;
    }
    return result;
  }, "");
};

// Export Number utilities
module.exports.NumberUtils = {
  clamp,
  isPrime,
  toOrdinal,
  toRoman,
};

// Date Utilities

/**
 * Checks if a date is on the weekend.
 * @param {Date} date - The date to check.
 * @returns {boolean} - `true` if the date is a Saturday or Sunday, otherwise `false`.
 */
const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

/**
 * Adds a specified number of days to a date.
 * @param {Date} date - The date to modify.
 * @param {number} days - The number of days to add.
 * @returns {Date} - A new date object with the days added.
 */
const addDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
};

/**
 * Returns the start of the week (Monday) for the given date.
 * @param {Date} date - The date to start the week from.
 * @returns {Date} - A new date object representing the start of the week.
 */
const startOfWeek = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  newDate.setDate(newDate.getDate() - day);
  return newDate;
};

/**
 * Returns the end of the week (Sunday) for the given date.
 * @param {Date} date - The date to end the week from.
 * @returns {Date} - A new date object representing the end of the week.
 */
const endOfWeek = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  newDate.setDate(newDate.getDate() + (6 - day));
  return newDate;
};

/**
 * Formats a date to a string based on the provided format.
 * @param {Date} date - The date to format.
 * @param {string} format - The format string (e.g., 'yyyy-mm-dd').
 * @returns {string} - The formatted date string.
 */
const format = (date, format) => {
  const options = {
    yyyy: date.getFullYear(),
    mm: String(date.getMonth() + 1).padStart(2, "0"),
    dd: String(date.getDate()).padStart(2, "0"),
    HH: String(date.getHours()).padStart(2, "0"),
    MM: String(date.getMinutes()).padStart(2, "0"),
    SS: String(date.getSeconds()).padStart(2, "0"),
  };
  return format.replace(/yyyy|mm|dd|HH|MM|SS/g, (token) => options[token]);
};

// Export Date utilities
module.exports.DateUtils = {
  isWeekend,
  addDays,
  startOfWeek,
  endOfWeek,
  format,
};
