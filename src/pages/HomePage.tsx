import { FC } from 'react';

import { Link } from 'react-router-dom';

const HomePage: FC = function HomePage() {
  return (
    <div className="pt-16">
      <div className="flex gap-4">
        <Link to="viewer" className="border p-4 rounded-md">
          뷰어
        </Link>
        <Link to="parser" className="border p-4 rounded-md">
          Parser
        </Link>
        <Link to="editor" className="border p-4 rounded-md">
          Pdf editor
        </Link>
      </div>
    </div>
  );
};

export { HomePage };
