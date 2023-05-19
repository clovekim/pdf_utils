import { FC, useState } from 'react';

import pdfParse from 'pdf-parse';

const MyPdfViewer: FC = function MyPdfViewer() {
  const [data, setData] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const dataBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(new Uint8Array(dataBuffer));
      const pdfData = await pdfParse(buffer);

      setData(pdfData.text);
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />

      {data && (
        <div>
          <p>{data}</p>
        </div>
      )}
    </div>
  );
};

export { MyPdfViewer };
