'use client';
import { Field, TextField } from '@/components/common';
import { useToast } from '@/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { LOGIN_FORM_DVALUES, loginSchema, TLoginForm } from './definition';
import styles from './style.module.scss';

export default function Login() {
  // [Hook] Translation hook
  const t = useTranslations('auth');
  const tMsg = useTranslations('message');
  // [Hook] Route action hook
  const router = useRouter();
  // [Hook] Toaster hook
  const toast = useToast();

  // [Form] Login form hook
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TLoginForm>({
    resolver: zodResolver(loginSchema(tMsg)),
    defaultValues: LOGIN_FORM_DVALUES,
  });

  /**
   * Handle login form submit
   * @param data - Login form data
   */
  const handleLogin = (data: TLoginForm) => {
    router.push(`/login?username=${data.username}`);
    toast.success('Login successfully');
  };

  return (
    <div className={styles['login-container']}>
      <div className={styles['login-form-wrapper']}>
        <p className='text-3xl text-center mb-4'>{t('login')}</p>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <Field control={control} name='username' label='Username' required>
            <TextField error={errors?.username?.message} />
          </Field>
          <Field control={control} name='password' label='Password' required>
            <TextField type='password' error={errors?.password?.message} />
          </Field>
          <Button onClick={handleSubmit(handleLogin)}>Login</Button>
        </div>
      </div>
    </div>
  );
}
