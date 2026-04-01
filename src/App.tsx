import S from "./App.module.scss";
import { FacultyList } from "./widgets/faculty-list/FacultyList";

function App() {
  return (
    <div className={S["content"]}>
      <FacultyList />
    </div>
  );
}

export default App;
