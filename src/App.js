import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Pages from './components/section/Pages';
import Home from './components/section/Home';
import Woment from './components/section/Woment';
import Menu from './components/menu/Menu';
import Notfound from './components/section/Notfound';
import Chitiet from './components/section/Chitiet';
import Footer from './components/Footer/Footer';
import Singgin from './components/Singgin/Singgin';
import Men from './components/section/Men';
import Cart from './components/section/Cart';

function App() {
  const routers = [
    {
      path: "/",
      exact: true,
      main: () => <Home />
    },
    {
      path: "/sanpham",
      exact: false,
      main: ({ match, location }) => <Chitiet match={match} location={location} />
    },
    {
      path: "/pages",
      exact: false,
      main: () => <Pages />
    },
    {
      path: "/men",
      exact: false,
      main: () => <Men />
    },
    {
      path: "/cart",
      exact: false,
      main: () => <Cart />
    },
    {
      path: "/woment",
      exact: false,
      main: () => <Woment />
    },
    {
      path: "/singgin",
      exact: false,
      main: () => <Singgin />
    },
    {
      path: "",
      exact: false,
      main: () => <Notfound />
    }
  ];
  useEffect(() => {
    const auth = getAuth();
    const un = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const account = user.email;
        localStorage.setItem("account", JSON.stringify(account));
        // ...
      } else {
        localStorage.setItem("account", null);
        // User is signed out
        // ...
      }
    });
    return un
  }, []);

  return (
    < Router >
      <div>
        <Menu />

        <div className="section">
          <Switch>
            {
              routers.map((items, index) => {
                return (
                  <Route
                    key={index}
                    path={items.path}
                    exact={items.exact}
                    component={items.main}
                  />
                )
              })
            }
          </Switch>
        </div>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
