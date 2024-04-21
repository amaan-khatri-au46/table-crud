import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import EmployeeDetailsPage from "./views/pages/EmployeeDetailsPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
