import 'client-only';

import { z } from 'zod';

export const findErrorMessage = (errors: z.ZodIssue[], path: string) =>
  errors.find((e) => e.path.includes(path))?.message ?? '';
