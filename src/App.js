import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddAdmin from './Components/Admin/AddAdmin/AddAdmin';
import AddService from './Components/Admin/AddService/AddService';
import Manage from './Components/Admin/Manage/Manage';
import UserBookList from './Components/Admin/UserBookList/UserBookList';
import Booking from './Components/Dashboard/Dashboard/Booking/Booking';
import BookingList from './Components/Dashboard/Dashboard/BookingList/BookingList';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Review from './Components/Dashboard/Review/Review';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFoundPage/NotFound/NotFound';

export const UseContext = createContext();

const App = () => {
  const [logInUser, setLoginUser] = useState({})
  return (
    <UseContext.Provider value={[logInUser, setLoginUser]}>
      <Router>
        <Switch>

          <PrivateRoute path="/userBookList">
            <UserBookList />
          </PrivateRoute>

          <PrivateRoute path="/manage">
            <Manage />
          </PrivateRoute>

          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>

          <PrivateRoute path="/addAdmin">
            <AddAdmin />
          </PrivateRoute>

          <PrivateRoute path="/dashboard/booking/:_id">
            <Booking />
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/bookingList">
            <BookingList />
          </PrivateRoute>

          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>

      </Router>
    </UseContext.Provider>

  );
};

export default App;