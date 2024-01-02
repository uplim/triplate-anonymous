import { z } from 'zod';

import { Validator } from '@/actions/types';

const schema = z.object({
  name: z.string({
    invalid_type_error: 'Invalid Email',
  }),
  password: z.string({
    invalid_type_error: 'Invalid Password',
  }),
});

export const validator: Validator = (formData) => {
  try {
    schema.parse({
      name: formData.get('name'),
      password: formData.get('password'),
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { type: 'ValidationError', message: error.message };
    }
  }

  return null;
};
