import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { getProgramsData } from "./widgets/programs-catalog/model/getProgramsData.ts";

const PROGRAMS_DATA_MANIFEST_URL = import.meta.env.PROD
  ? "/wp-content/uploads/edu-tree/programs-catalog/manifest.json"
  : "/programs-catalog/manifest.json";

const programsDataResponse = await getProgramsData(PROGRAMS_DATA_MANIFEST_URL);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App programsResponse={programsDataResponse} />
  </StrictMode>
);
