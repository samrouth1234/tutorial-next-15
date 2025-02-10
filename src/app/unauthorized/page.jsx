"use client"

const UnauthorizeState = ({ error }) => {
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return (
    <EmptyState
      title="Uh No"
      subtitle="You don't have permission for this resource"
      showReset
      label="Go back home"
    />
  );
};

export default UnauthorizeState;