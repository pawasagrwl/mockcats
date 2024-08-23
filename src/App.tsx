import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import ChartDisplay from "./components/ChartDisplay";

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);

  return (
    <div style={{ padding: "20px" }}>
      <FileUpload />
      {data && <ChartDisplay data={data.analysis.overall} />}
    </div>
  );
};

export default App;
