import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { processHTMLFile } from './utils'; // Utility functions for processing HTML

const FileUpload: React.FC = () => {
  const [data, setData] = useState<any>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const contents = event.target?.result as string;
        const processedData = processHTMLFile(contents);
        setData(processedData);
      };
      reader.readAsText(file);
    }
  };

  return (
    <Box>
      <Typography variant="h4">Upload an HTML File</Typography>
      <input
        type="file"
        accept=".htm,.html"
        onChange={handleFileUpload}
        style={{ margin: '20px 0' }}
      />
      {data && (
        <Box>
          <Typography variant="h6">Processed Data:</Typography>
          <pre>{JSON.stringify(data.result, null, 2)}</pre>
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;
