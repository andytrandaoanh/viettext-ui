import {  Switch,  Route } from "react-router-dom";
import HomePage from '../pages/home-page';
import AuthorPage from '../pages/author-page';

export default function RoutingComponent()  {
    
    return (
      <Switch>

        <Route path="/authors" component={AuthorPage} />
        <Route path="/" component={HomePage} />
        
        
      </Switch>

      
    );
    
}
