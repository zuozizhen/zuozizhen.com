import useArticleReactions from '@/lib/hooks/useArticleReactions';

const Reactions = ({ slug }) => {
  const {
    hasLiked,
    reactions,
    handleIncrementLike,
    handleDecrementLike,
  } = useArticleReactions(slug);

  return (
    <div className="grid grid-cols-4 md:grid-cols-2 gap-6 justify-between items-center">
      <ReactionCard
        isActive={hasLiked}
        incrementCB={handleIncrementLike}
        decrementCB={handleDecrementLike}
      >
        <span className="text-4xl">👍</span>
        <span className="text-xl font-semibold">{reactions?.like_count}</span>
        <span className="text-sm">LIKE</span>
      </ReactionCard>
    </div>
  );
};

export default Reactions;

function ReactionCard({ isActive, incrementCB, decrementCB, children }) {
  return (
    <div
      role="button"
      onClick={isActive ? () => decrementCB() : () => incrementCB()}
      className={`${
        isActive
          ? 'bg-gray-300 dark:bg-darker'
          : 'bg-blueGray-100 dark:bg-midnight'
      } flex-1 py-4 rounded-lg flex flex-col items-center general-ring-state`}
    >
      {children}
    </div>
  );
}
