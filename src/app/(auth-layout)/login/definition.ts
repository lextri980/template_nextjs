import { _Translator } from 'next-intl';
import z from 'zod';

// [Type] Login Form Data Type
export type TLoginForm = z.infer<ReturnType<typeof loginSchema>>;

// [Const] Default values for login form
export const LOGIN_FORM_DVALUES = {
  username: '',
  password: '',
};

// [Schema] Login Form Validation Schema
export const loginSchema = (t?: _Translator) =>
  z.object({
    username: z.string().min(1, t?.('M001')),
    password: z.string().min(1, t?.('M001')),
    remember: z.boolean().optional(),
  });
