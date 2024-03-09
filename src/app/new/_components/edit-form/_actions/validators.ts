import { z } from 'zod';

import type { Validator } from '@/actions/types';

const schema = z.object({
  name: z.string().min(1, '旅の名前は必須です').max(20, '旅の名前は20文字以内にしてください'),
  password: z
    .string()
    .min(1, 'あいことばは必須です')
    .max(20, 'あいことばは20文字以内にしてください'),
});

export const validator: Validator<z.infer<typeof schema>, FormData> = (formData) => {
  const res = schema.safeParse({
    name: formData.get('name'),
    password: formData.get('password'),
  });

  return res;
};
