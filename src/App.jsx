import { useSelector } from "react-redux";
import InputArea from "./components/InputArea/InputArea";
import TableArea from "./components/TableArea/TableArea";

function App() {
  const savedElement = useSelector((store) => store.data.savedElement);
  return (
    <>
      <h2>ÖĞRENCİ KURS ATAMA PROGRAMI</h2>
      <InputArea />
      {savedElement.length > 0 && <TableArea />}
    </>
  );
}

export default App;
