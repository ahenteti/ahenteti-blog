export class MapUtils {
  static sortKeys<K, V>(
    map: Map<K, V>,
    compareFn: (a: K, b: K) => number
  ): Map<K, V> {
    return new Map([...map.entries()].sort((a, b) => compareFn(a[0], b[0])));
  }

  static sortValues<K, V>(
    map: Map<K, V>,
    compareFn: (a: V, b: V) => number
  ): Map<K, V> {
    return new Map([...map.entries()].sort((a, b) => compareFn(a[1], b[1])));
  }
}
