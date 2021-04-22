import HomePage from "./pages/HomePage/HomePage";
//import HeaderComponent from './pages/HeaderComponent';
import SignUp from "./pages/Sign-Up/Sign-Up";
import EmailVerification from "./pages/Email-Verification/EmailVerification";
import EnterEmail from "./pages/EnterEmail/EnterEmail";
import Menu from "./pages/Menu/Menu";
import ProductRow from "./pages/product/ProductRow"; //product row component
import BasketItem from "./pages/BasketItem/BasketItem"; //basket component
import Cart from "./pages/Cart/Cart"; //cart page
import TotalComp from "./pages/TotalComp/TotalComp";//Total component
//import ChangePassword from './pages/ChangePassword/ChangePassword';//import Change Password Web Page
//import HomeBuyer from './pages/Home(Buyer)/HomeBuyer';//home page for buyer
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">

                 

            <HomePage />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/emailverify">
            <EmailVerification />
          </Route>
          <Route path="/emailenter">
            <EnterEmail />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/productRow">
            <ProductRow />
          </Route>
          <Route path="/basket">
            <BasketItem />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/total">
          <TotalComp />
        </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
