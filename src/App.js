import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Routes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { refreshAccessToken, selectAccessToken } from "./store/shared/userSlice";
import Home from "./pages/Home";
import ClothingSection from "./pages/ClothingSection";
import Checkout from "./pages/Checkout";
import "./App.css";

const Login = lazy(() => import("./pages/Login"));

const hatsCategoryId = "617da345b318b8a2e0cc933a";
const jacketsCategoryId = "617da345b318b8a2e0cc9346";
const sneakersCategoryId = "617da344b318b8a2e0cc9322";

const App = () => {
  const accessToken = useSelector(selectAccessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshAccessToken());
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Header />
        <Suspense fallback={null}>
          <Switch>
            <Route exact path={Routes.login}>
              {accessToken.token ? <Redirect to={Routes.home} /> : <Login />}
            </Route>
            <Route exact path={Routes.home}>
              <Home />
            </Route>
            <Route exact path={Routes.hats}>
              <ClothingSection
                sectionTitle="Hats"
                clothingCategoyId={hatsCategoryId}
              />
            </Route>
            <Route exact path={Routes.jackets}>
              <ClothingSection
                sectionTitle="Jackets"
                clothingCategoyId={jacketsCategoryId}
              />
            </Route>
            <Route exact path={Routes.sneakers}>
              <ClothingSection
                sectionTitle="Sneakers"
                clothingCategoyId={sneakersCategoryId}
              />
            </Route>
            <Route exact path={Routes.checkout}>
              <Checkout />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
