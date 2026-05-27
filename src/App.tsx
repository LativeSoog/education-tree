import S from "./App.module.scss";
import { ProgramsCatalog } from "./widgets/programs-catalog/ProgramsCatalog";

function App() {
  return (
    <div className={S["content"]}>
      <ProgramsCatalog />
    </div>
  );
}

export default App;
