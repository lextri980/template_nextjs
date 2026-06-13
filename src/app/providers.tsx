import { MuiThemeProvider } from '@/contexts';
import { NextIntlClientProvider } from 'next-intl';
import { Toaster as ToasterProvider } from 'sonner';

/**
 * Providers component
 * @param {React.ReactNode} children - The children to be wrapped by the Providers component
 * @returns {React.ReactNode} The Providers component
 */
export function Providers({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <NextIntlClientProvider>
      <MuiThemeProvider>
        {children}
        <ToasterProvider
          className='toaster-provider'
          position='top-right'
          offset={{ top: '24px', right: '24px' }}
          mobileOffset={{ top: '10px', right: '10px' }}
          toastOptions={{ duration: 5000 }}
        />
      </MuiThemeProvider>
    </NextIntlClientProvider>
  );
}
