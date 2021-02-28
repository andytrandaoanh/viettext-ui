import {  Switch,  Route } from "react-router-dom";
import HomePage from '../pages/home-page';
import AuthorPage from '../pages/author-page';
import GenrePage from '../pages/genre-page';
import TopicPage from '../pages/topic-page';


export default function RoutingComponent()  {
    
    return (
      <Switch>

        <Route path="/authors" component={AuthorPage} />
        <Route path="/genres" component={GenrePage} />
        <Route path="/topics" component={TopicPage} />
        <Route path="/" component={HomePage} />
        
        
      </Switch>

      
    );
    
}
