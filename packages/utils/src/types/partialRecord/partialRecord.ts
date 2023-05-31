/**
 * The above type defines a generic type PartialRecord that represents a record with optional values
 * for a given set of keys.
 * @property [: undefined] - The above code defines a TypeScript type called `PartialRecord` which
 * takes two type parameters: `K` and `T`.
 */
export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
