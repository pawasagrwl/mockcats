import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import { ProcessedData } from "./types";
import ChartDisplay from "./components/ChartDisplay";

const App: React.FC = () => {
  const [data, setData] = useState<ProcessedData | null>(null); // Initialize with null

  return (
    <div style={{ padding: "20px" }}>
      <FileUpload data={data} setData={setData} />
      {/* {data && <ChartDisplay data={data.analysis.overall} />} */}
    </div>
  );
};

export default App;
