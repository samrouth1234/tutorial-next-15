import { useRouter } from 'next/navigation';

const EmptyState = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  label = "Remove all filters",
  showReset,
  reset,
}) => {
  const router = useRouter();

  return (
    <div
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {showReset && (
        <button
          onClick={() => {
            reset && reset();
            router.push('/');
          }}
          className="
            bg-var(--primary) 
            text-white 
            px-4 
            py-2 
            rounded-md 
            hover:bg-var(--primary-dark)
          "
        >
          {label}
        </button>
      )}
    </div>
  );
};

export default EmptyState;