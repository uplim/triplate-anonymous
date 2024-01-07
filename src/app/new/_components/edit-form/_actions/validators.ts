import { z } from 'zod';

import { Validator } from '@/actions/types';

const schema = z.object({
  name: z.string().max(20, 'nameは20文字以内にしてください'),
  password: z.string().max(20, 'passwordは20文字以内にしてください'),
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
        error: {
          type: 'ValidationError',
          errors: error.errors,
        },
      };
    }

    return {
      isParsed: false,
    };
  }
};
