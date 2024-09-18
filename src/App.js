import Header from "./components/Header";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Routes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import {
  refreshAccessToken,
  selectAccessToken,
} from "./store/shared/userSlice";
import Home from "./pages/Home";
import ClothingSection from "./pages/ClothingSection";
import Checkout from "./pages/Checkout";
import "./App.css";
import { fetchClothingCategories, selectAllClothingCategories } from "./store/clothingCategory";

const Login = lazy(() => import("./pages/Login"));

const App = () => {
  const accessToken = useSelector(selectAccessToken);
  const clothingCategories = useSelector(selectAllClothingCategories)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshAccessToken());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchClothingCategories())
  }, [dispatch])

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
            {clothingCategories.map(clothingCategory => (
              <Route exact path={Routes[clothingCategory.name]}>
                <ClothingSection
                  sectionTitle={clothingCategory.name}
                  clothingCategoyId={clothingCategory.id}
                />
              </Route>))}
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
