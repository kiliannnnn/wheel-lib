const { StringUtils } = require('./index');
const { ArrayUtils } = require('./index');
const { ObjectUtils } = require('./index');
const { NumberUtils } = require('./index');
const { DateUtils } = require('./index');

// Attach String methods
Object.assign(String.prototype, {
  toTitleCase: function () {
    return StringUtils.toTitleCase(this);
  },
  reverse: function () {
    return StringUtils.reverse(this);
  },
  containsIgnoreCase: function (substr) {
    return StringUtils.containsIgnoreCase(this, substr);
  },
  truncate: function (maxLength, ellipsis = '...') {
    return StringUtils.truncate(this, maxLength, ellipsis);
  },
  toSnakeCase: function () {
    return StringUtils.toSnakeCase(this);
  },
  toPascalCase: function () {
    return StringUtils.toPascalCase(this);
  },
  toCamelCase: function () {
    return StringUtils.toCamelCase(this);
  },
  toKebabCase: function () {
    return StringUtils.toKebabCase(this);
  },
});

// Attach Array methods
Object.assign(Array.prototype, {
  chunk: function (size) {
    return ArrayUtils.chunk(this, size);
  },
  average: function () {
    return ArrayUtils.average(this);
  },
  unique: function () {
    return ArrayUtils.unique(this);
  },
  flatten: function () {
    return ArrayUtils.flatten(this);
  },
  groupBy: function (callback) {
    return ArrayUtils.groupBy(this, callback);
  },
});

// Attach Object methods
Object.assign(Object.prototype, {
  deepClone: function () {
    return ObjectUtils.deepClone(this);
  },
  merge: function (other) {
    return ObjectUtils.merge(this, other);
  },
});

// Attach Number methods
Object.assign(Number.prototype, {
  clamp: function (min, max) {
    return NumberUtils.clamp(this, min, max);
  },
  isPrime: function () {
    return NumberUtils.isPrime(this);
  },
  toOrdinal: function () {
    return NumberUtils.toOrdinal(this);
  },
  toRoman: function () {
    return NumberUtils.toRoman(this);
  },
});

// Attach Date methods
Object.assign(Date.prototype, {
  isWeekend: function () {
    return DateUtils.isWeekend(this);
  },
  addDays: function (days) {
    return DateUtils.addDays(this, days);
  },
  startOfWeek: function () {
    return DateUtils.startOfWeek(this);
  },
  format: function (format = 'yyyy-mm-dd') {
    return DateUtils.format(this, format);
  }
});

module.exports = {};

