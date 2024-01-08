import { z } from 'zod';

import { Validator } from '@/actions/types';

const schema = z.object({
  name: z.string().max(20, 'nameは20文字以内にしてください'),
  password: z.string().max(20, 'passwordは20文字以内にしてください'),
});

export const validator: Validator<z.infer<typeof schema>, FormData> = (
  formData
) => {
  const res = schema.safeParse({
    name: formData.get('name'),
    password: formData.get('password'),
  });

  return res;
};
