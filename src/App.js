import { useState } from "react";
import RederData from "./components/RederData";
import UserForm from "./components/UserForm";
import "./app.css";

function App() {
  const [data, setData] = useState({});
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="container">
      <UserForm setData={setData} isEdit={isEdit} setIsEdit={setIsEdit} />
      <RederData data={data} setIsEdit={setIsEdit} isEdit={isEdit} />
    </div>
  );
}

export default App;
