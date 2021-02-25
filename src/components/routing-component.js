import {  Switch,  Route } from "react-router-dom";
import Home from '../pages/home-page';


export default function RoutingComponent()  {
    
    return (
      <Switch>

        <Route path="/" component={Home} />
        
      </Switch>

      
    );
    
}
