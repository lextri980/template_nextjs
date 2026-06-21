import z from 'zod';

export const TextfieldCollapseFormSchema = z.object({
  baseTextfield: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  errorTextfield: z.string().optional().nullable(),
});
