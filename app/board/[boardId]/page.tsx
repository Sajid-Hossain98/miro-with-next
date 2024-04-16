import { Canvas } from "./_components/canvas";

interface boardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: boardIdPageProps) => {
  return <Canvas boardId={params.boardId} />;
};

export default BoardIdPage;
