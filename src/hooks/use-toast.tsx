import { Toaster } from '@/components/common';
import { toast } from 'sonner';

/**
 * [Hook] Generate toaster action
 * @returns Toaster caller
 */
export default function useToast() {
  /**
   * Call the toast with [SUCCESS] status
   * @param message - Message of toaster
   */
  const success = (message?: string | React.ReactElement) => {
    toast(
      () => renderToasterComponent(message),
      generateToasterOptions('toast-success')
    );
  };

  /**
   * Call the toast with [WARNING] status
   * @param message - Message of toaster
   */
  const warning = (message?: string | React.ReactElement) => {
    toast(
      () => renderToasterComponent(message),
      generateToasterOptions('toast-warning')
    );
  };

  /**
   * Call the toast with [ERROR] status
   * @param message - Message of toaster
   */
  const error = (message?: string | React.ReactElement) => {
    toast(
      () => renderToasterComponent(message),
      generateToasterOptions('toast-error')
    );
  };

  /**
   * Call the toast with [INFO] status
   * @param message - Message of toaster
   */
  const info = (message?: string | React.ReactElement) => {
    toast(
      () => renderToasterComponent(message),
      generateToasterOptions('toast-info')
    );
  };

  /**
   * Dismiss all the toast being display
   * @returns Toast dismiss calling function
   */
  const dismiss = () => {
    return toast.dismiss();
  };

  /**
   * Generate common toast options
   * @param toastStatus - Status of toast
   * @returns Toast options
   */
  const generateToasterOptions = (toastStatus: string) => {
    return {
      className: toastStatus,
    };
  };

  /**
   * [Render] Common toaster component
   * @param message - Message of toaster
   * @returns Toaster component
   */
  const renderToasterComponent = (message?: string | React.ReactElement) => {
    return <Toaster message={message} />;
  };

  return { success, warning, error, info, dismiss };
}
