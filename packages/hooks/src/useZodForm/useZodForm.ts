import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormProps, useForm } from 'react-hook-form';
import { ZodSchema, TypeOf } from 'zod';

export interface UseZodFormInput<T extends ZodSchema<any>> extends UseFormProps<TypeOf<T>> {
  schema: T;
}

/**
 * It takes a Zod schema and returns a form hook
 * @param  - schema - the zod schema you want to validate against
 */
export const useZodForm = <T extends ZodSchema<any>>({
  schema,
  ...formConfig
}: UseZodFormInput<T>) =>
  useForm({
    ...formConfig,
    resolver: zodResolver(schema),
  });
