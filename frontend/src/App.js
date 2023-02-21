import { Route, Routes, BrowserRouter } from "react-router-dom";
import Public_layout from "./component/layout/Public_layout";
import Dashboard from "./component/user/dashboard/Dashboard";
import Event_form from "./component/user/event_form/Event_form";
import List_of_participant from "./component/user/list_of_participant/List_of_participant";
import Show_result from "./component/user/Result/Show_result";
import Result_form from "./component/user/result_form/Result_form";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard />
        <Routes>
          <Route element={<Public_layout />}>
            <Route path="/eventform" element={<Event_form />} />
            <Route
              path="/listofparticipant"
              element={<List_of_participant />}
            />
            <Route path="/resultform" element={<Result_form />} />
            <Route path="/showresult" element={<Show_result />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
