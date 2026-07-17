import S from "./App.module.scss";
import { ProgramsCatalog } from "./widgets/programs-catalog/ui";
import type { ProgramsDataResponse } from "./widgets/programs-catalog/api/getProgramsData.types";

type AppProps = {
  programsResponse: ProgramsDataResponse;
};

function App({ programsResponse }: AppProps) {
  return (
    <div className={S["content"]}>
      {programsResponse.ok ? (
        <ProgramsCatalog data={programsResponse.data} />
      ) : (
        <p>Произошла ошибка: {programsResponse.error.message}</p>
      )}
    </div>
  );
}

export default App;
