import { isArrayWithLength } from './isArrayWithLength';

describe('isArrayWithLength', () => {
  it('should return true for non-empty arrays', () => {
    // Arrange
    expect(isArrayWithLength([1, 2, 3])).toBe(true);
    expect(isArrayWithLength(['a', 'b', 'c'])).toBe(true);
    expect(isArrayWithLength([{ name: 'Alice' }, { name: 'Bob' }])).toBe(true);
  });

  it('should return false for empty arrays', () => {
    // Arrange
    expect(isArrayWithLength([])).toBe(false);
  });

  it('should return false for null or undefined', () => {
    // Arrange
    expect(isArrayWithLength(null)).toBe(false);
    expect(isArrayWithLength(undefined)).toBe(false);
  });

  it('should return false for non-array values', () => {
    // Arrange
    expect(isArrayWithLength('not an array' as any)).toBe(false);
    expect(isArrayWithLength(123 as any)).toBe(false);
    expect(isArrayWithLength({ key: 'value' } as any)).toBe(false);
  });
});
