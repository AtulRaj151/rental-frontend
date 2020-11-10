
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

import SearchPage from './SearchPage'
import Home from './Home'
import Footer from './Footer';
import Header from './Header'
import { Admin} from './Admin';
import {  User, UserAccount} from './User'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
           {/* Login Page Routes */}

           <Route path="/admin/auth">
             <Admin/>
          </Route>
       

           <Route path="/users/auth">
             <User/>
          </Route>
          <Route path="/users/auth">
             <UserAccount/>
          </Route>
         
          {/* searchPage */}
          <Route path="/search">
            <SearchPage/>
          </Route>
          {/* home */}
          <Route path="/">
              <Home/>
          </Route>
         

        </Switch>
        <Footer/>
      </Router>
     
     
     


    </div>
  );
}

export default App;
