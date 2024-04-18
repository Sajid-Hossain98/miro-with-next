export const Participants = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md flex items-center shadow-md p-3">
      List of users
    </div>
  );
};

Participants.Skeleton = function ParticipantSkeleton() {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md flex items-center shadow-md p-3 w-[100px]" />
  );
};
