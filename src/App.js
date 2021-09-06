import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Create from './Components/Blog/Create';
import Footer from './Components/Footer';
import BlogDetails from './Components/Blog/BlogDetails';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <Router>
      <div className="dark:bg-black transition duration-500">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route exact path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
