import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";
import Jokes from "./pages/Jokes";
import JokeDetails from "./pages/JokeDetails";
import AddJoke from "./pages/AddJoke";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
   <Layout>
     <Switch>
       <Route path='/' exact>
         <Redirect to='/jokes'/>
       </Route>
       <Route path='/jokes' exact>
         <Jokes/>
       </Route>
       <Route path='/jokes/:jokeID'>
         <JokeDetails/>
       </Route>
       <Route path='/add-joke'>
         <AddJoke/>
       </Route>
       <Route path='*'>
         <NotFound/>
       </Route>
     </Switch>
   </Layout>
  );
}

export default App;
