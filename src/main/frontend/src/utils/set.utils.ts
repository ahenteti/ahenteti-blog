export class SetUtils {
  static sort<T>(set: Set<T>, compareFn?: (a: T, b: T) => number): Set<T> {
    return new Set<T>(Array.from(set).sort(compareFn));
  }
}
