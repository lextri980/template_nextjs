import z from 'zod';
import { TextfieldCollapseFormSchema } from '../schemas';

export type TTextfieldCollapseForm = z.infer<
  typeof TextfieldCollapseFormSchema
>;
