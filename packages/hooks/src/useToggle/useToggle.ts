import { MouseEvent, useCallback, useState } from 'react';

type Value = boolean;
export type UseToggleCallback = (value?: Value | MouseEvent<HTMLElement>) => void;

/**
 * It returns a tuple of the current value and a function that toggles the value
 * @param [initialOn=false] - The initial value of the toggle.
 * @returns An array with two values. The first value is the current state of the toggle. The second
 * value is a function that can be used to toggle the state.
 */
export const useToggle = (initialOn = false): [Value, UseToggleCallback] => {
  const [on, setOn] = useState<Value>(initialOn);

  const toggle = useCallback<UseToggleCallback>(
    value => setOn(currentValue => (typeof value === 'boolean' ? value : !currentValue)),
    [],
  );

  return [on, toggle];
};
