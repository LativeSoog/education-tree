import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { getProgramsData } from "./widgets/programs-catalog/api/getProgramsData.ts";

const PROGRAMS_DATA_MANIFEST_URL = import.meta.env.PROD
  ? "/wp-content/themes/mpgu20/cpk_file/edu-tree/catalog/manifest.json"
  : "/programs-catalog/manifest.json";

const programsDataResponse = await getProgramsData(PROGRAMS_DATA_MANIFEST_URL);

createRoot(document.getElementById("edu-tree-root")!).render(
  <StrictMode>
    <App programsResponse={programsDataResponse} />
  </StrictMode>
);
