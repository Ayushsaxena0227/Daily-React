import { lazy, Suspense, useState } from "react";
import "./App.css";
import Weather from "./components/Weather";
import Notes from "./components/Notes";
import Accordian from "./components/Accordian";
import Countcharacters from "./components/Countcharacters";
// import Calculator from "./components/Calculator";
import Tabs from "./components/Tabs";
import Modalpopup from "./components/Modalpopup";
import Infinitescroll from "./components/Infinitescroll";
import Pagination from "./components/Pagination";
import Ecommerce from "./components/Ecommerce";
import { Login } from "./components/Login";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protected/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Trafficlight from "./components/Trafficlight";
import Passwordstrength from "./components/Passwordstrength";
import Expense from "./components/Expense";
import Typing from "./components/Tyoing";
import Clock from "./components/Clock";
import Stopwatch from "./components/Stopwatch";
import Products from "./components/Products";
import LoadMore from "./components/Loadmore";
import Textarea from "./components/TextArea";
import Toggle from "./components/Toggle";
import ListHover from "./components/ListHover";
import Name from "./components/Name";
import Api from "./components/Api";
import ApiTopPost from "./components/ApiTopPost";
import LiveProduct from "./components/Liveproduct";
import FormValidation from "./components/FormValidation";
import Posts from "./components/LazyLoading";
import Paginations from "./components/paginations";
import Apis from "./components/Apis";
import Emails from "./components/Apis";
import Temp from "./components/Temp";
import ChatWindow from "./components/Parent";
import Checkbox from "./components/CheckBox";
import ColorToggle from "./components/Trafficlight";
import Likes from "./components/Likes";
import Maxchar from "./components/Array";
import Parent from "./components/Parent";
import Greeting from "./components/Parent";
import Checked from "./components/Chcked";

// const LazyLoading = lazy(() => import("./components/LazyLoading"));
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   height: "100vh",
      // }}
      >
        {/* <Weather /> */}
        {/* <Notes /> */}
        {/* <Accordian /> */}
        {/* <Countcharacters /> */}
        {/* <Calculator /> */}
        {/* <Tabs /> */}
        {/* <Modalpopup /> */}
        {/* <Infinitescroll /> */}
        {/* <Pagination /> */}
        {/* <Ecommerce /> */}
        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes> */}
        {/* <Trafficlight /> */}
        {/* <Passwordstrength /> */}
        {/* <Expense /> */}
        {/* <Typing /> */}
        {/* <Clock /> */}
        {/* <Stopwatch /> */}
        {/* <Products /> */}
        {/* <LoadMore /> */}
        {/* <Textarea /> */}
        {/* <Toggle /> */}
        {/* <ListHover /> */}
        {/* <Name /> */}
        {/* <Api /> */}
        {/* <ApiTopPost /> */}
        {/* <LiveProduct /> */}
        {/* <FormValidation /> */}
        {/* <Paginations />/ */}
        {/* <Apis /> */}
        {/* <Emails /> */}
        {/* <Temp /> */}
        {/* <ChatWindow /> */}
        {/* <Checkbox /> */}
        {/* <ColorToggle /> */}
        {/* <Likes /> */}
        {/* <Maxchar /> */}
        {/* <Parent /> */}
        {/* <Name />
        <Greeting name="ALex" />
        <Greeting name="aman" /> */}
        {/* <Toggle /> */}
        {/* <Greeting /> */}
        <Checked />
        {/* <Routes>
          <Route path="/" element={<Textarea />}></Route>
          <Route element={<Name />} path="/name"></Route>
          <Route
            path="/api"
            element={
              <Suspense fallback={<p>component loading</p>}>
                <LazyLoading />
              </Suspense>
            }
          ></Route>
        </Routes> */}
      </div>
    </>
  );
}

export default App;
