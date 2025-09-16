export type EmailStatus = 'idle' | 'loading' | 'success' | 'error' | 'duplicate';

export interface EmailSubmissionResult {
  success: boolean;
  status: EmailStatus;
  message?: string;
}

export interface WaitlistFormProps {
  email: string;
  setEmail: (email: string) => void;
  status: EmailStatus;
  onSubmit: (e: React.FormEvent) => void;
  placeholder?: string;
  buttonText?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
}


