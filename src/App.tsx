import S from "./App.module.scss";
import type { ProgramsCatalogDataResponse } from "./widgets/programs-catalog/model/types";
import { ProgramsCatalog } from "./widgets/programs-catalog/ProgramsCatalog";

type AppProps = {
  programsResponse: ProgramsCatalogDataResponse;
};

function App({ programsResponse }: AppProps) {
  return (
    <div className={S["content"]}>
      {programsResponse.ok ? (
        <ProgramsCatalog catalog={programsResponse.data} />
      ) : (
        <p>Произошла ошибка: {programsResponse.error.message}</p>
      )}
    </div>
  );
}

export default App;
