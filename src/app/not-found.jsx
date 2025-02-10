'use client';

import EmptyState from '@/components/empty-state';

const NotFound = () => {

  return (
    <EmptyState
      title="Uh No"
      subtitle="Could not find requested resource"
      showReset
      label="Go back home"
    />
  );
};

export default NotFound;
