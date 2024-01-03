import { z } from 'zod';

import { Validator } from '@/actions/types';

const schema = z.object({
  name: z.string({
    invalid_type_error: 'Invalid Name',
  }),
  password: z.string({
    invalid_type_error: 'Invalid Password',
  }),
});

export const validator: Validator<z.infer<typeof schema>, FormData> = (
  formData
) => {
  try {
    const res = schema.parse({
      name: formData.get('name'),
      password: formData.get('password'),
    });

    return {
      isParsed: true,
      data: res,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isParsed: false,
        error: { type: 'ValidationError', message: error.message },
      };
    }

    return {
      isParsed: false,
    };
  }
};
