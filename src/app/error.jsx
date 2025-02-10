'use client';

import EmptyState from '@/components/empty-state';


const Error = ({ error, reset }) => {
  return (
    <EmptyState
      title="Uh No!! There was a problem."
      subtitle={error.message || 'Something went wrong.'}
      showReset
      label="Try again"
      reset={reset}
    />
  );
};

export default Error;
