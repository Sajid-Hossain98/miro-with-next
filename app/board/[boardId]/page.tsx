import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";

interface boardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: boardIdPageProps) => {
  return (
    <Room roomId={params.boardId}>
      <Canvas boardId={params.boardId} />;
    </Room>
  );
};

export default BoardIdPage;
