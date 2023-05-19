import { FC } from 'react';

import { MyPdfViewer } from 'src/components/MyPdfViewer';

const TestViewerPage: FC = function TestViewerPage() {
  console.log('test');
  return (
    <div>
      <MyPdfViewer />
    </div>
  );
};

export { TestViewerPage };
