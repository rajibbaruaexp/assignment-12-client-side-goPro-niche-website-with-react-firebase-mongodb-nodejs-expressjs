import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/Pages/About/About";
import CheckOut from "./components/Pages/CheckOut/CheckOut";
import Contact from "./components/Pages/Contact/Contact";
import Dashboard from "./components/Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "./components/Pages/Dashboard/MyOrders/MyOrders";
import Explore from "./components/Pages/Explore/Explore";
import Home from "./components/Pages/Home/Home";
import Login from "./components/shared/Header/Login/Login";
import PrivateRoute from "./components/shared/Header/Login/PrivateRoute";
import Registration from "./components/shared/Header/Login/Registration";
import AuthProvider from "./context/AuthProvider";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>

            <Route exact path="/contact">
              <Contact></Contact>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route path="/explore">
              <Explore></Explore>
            </Route>

            <Route exact path="/registration">
              <Registration></Registration>
            </Route>

            <PrivateRoute path="/my-orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute exact path="/checkOut/:id">
              <CheckOut></CheckOut>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
