import React from "react";
import { Box, Typography } from "@mui/material";
import { processHTMLFile } from "../utils";
import { ProcessedData } from "../types";

interface FileUploadProps {
  data: ProcessedData | null;
  setData: (data: ProcessedData | null) => void; // Prop to update parent state
}

const FileUpload: React.FC<FileUploadProps> = ({ data, setData }) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const contents = event.target?.result as string;
        const processedData = processHTMLFile(contents);
        setData(processedData); // Update parent state
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
        style={{ margin: "20px 0" }}
      />
      {data && (
        <Box>
          <Typography variant="h6">Processed Data:</Typography>
          <pre>{JSON.stringify(data.analysis.overall, null, 2)}</pre>
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;
