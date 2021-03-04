import {  Switch,  Route } from "react-router-dom";
import HomePage from '../pages/home-page';
import AuthorPage from '../pages/author-page';
import GenrePage from '../pages/genre-page';
import TopicPage from '../pages/topic-page';
import WorkPage from '../pages/work-page';
import WorkAuthorPage from '../pages/work-author-page';
import WorkContentPage from '../pages/work-content-page';
import ChapterPage from '../pages/chapter-page';
import SearchPage from '../pages/search-page';


export default function RoutingComponent()  {
    
    return (
      <Switch>

        <Route path="/authors" component={AuthorPage} />
        <Route path="/chaptersearch/:query" component={SearchPage} />
        <Route path="/chapters" component={ChapterPage} />
        <Route path="/genres" component={GenrePage} />        
        <Route path="/topics" component={TopicPage} />
        <Route path="/worksbyauthor/:id" component={WorkAuthorPage} />
        <Route path="/workcontent/:id" component={WorkContentPage} />
        <Route path="/works" component={WorkPage} />

        <Route path="/" component={HomePage} />
        
        
      </Switch>

      
    );
    
}
