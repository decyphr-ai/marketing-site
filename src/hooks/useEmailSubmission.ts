import { EmailStatus } from '@/types/forms';

export function useEmailSubmission() {
  const handleEmailSubmit = async (email: string, setStatus: (status: EmailStatus) => void, setEmailValue: (email: string) => void) => {
    console.log('Form submitted:', { email }); // Debug log
    
    if (!email.trim()) {
      console.log('Empty email, returning early');
      return;
    }

    setStatus('loading');

    try {
      console.log('Submitting email:', email);
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const contentType = response.headers.get('content-type') || '';
      const isJson = contentType.includes('application/json');
      let result = null;
      
      if (isJson) {
        try {
          result = await response.json();
        } catch (parseError) {
          console.warn('Failed to parse JSON response:', parseError);
        }
      } else {
        const text = await response.text().catch(() => '');
        console.warn('Non-JSON response:', { status: response.status, text });
      }
      
      console.log('API Response:', { status: response.status, result });

      if (response.ok) {
        setStatus('success');
        setEmailValue(''); // Clear the input
        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        // Check if it's a duplicate email error
        if (response.status === 409) {
          setStatus('duplicate');
          // Don't log duplicate as an error - it's expected behavior
        } else {
          // Only log actual errors, not duplicates
          const errorMessage = result?.error || `HTTP ${response.status}`;
          console.error('API Error:', errorMessage, result);
          setStatus('error');
        }
        setTimeout(() => setStatus('idle'), 5000); // Show status longer
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return { handleEmailSubmit };
}
