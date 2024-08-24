import React, { useState, useEffect } from "react";
import FileUpload from "./body/FileUpload";
import { ProcessedData } from "../types";

const Body: React.FC = () => {
  const [data, setData] = useState<ProcessedData | null>(null);
  return (
    <div style={{ padding: "20px" }}>
      <FileUpload data={data} setData={setData} />
    </div>
  );
};

export default Body;
