export class StringUtils {
  static isEmpty(str) {
    return !str || 0 === str.length;
  }
  static isBlank(str) {
    return !str || /^\s*$/.test(str);
  }
}
