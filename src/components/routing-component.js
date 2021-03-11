import {  Switch,  Route } from "react-router-dom";
import HomePage from '../pages/home-page';
import AuthorPage from '../pages/author-page';
import GenrePage from '../pages/genre-page';
import TopicPage from '../pages/topic-page';
import WorkAuthorPage from '../pages/work-author-page';
import WorkContentPage from '../pages/work-content-page';
import ChapterAddPage from '../pages/chapter-add-page';
import ChapterEditPage from '../pages/chapter-edit-page';
import ChapterListPage from '../pages/chapter-list-page';
import ChapterSearchPage from '../pages/search-page';
import AuthorListPage from '../pages/author-list-page';
import WorkAddPage from '../pages/work-add-page';
import WorkEditPage from '../pages/work-edit-page';
import WorkListEditPage from '../pages/work-edits-page';
import WorkListPage from '../pages/work-list-page';
import WorkTypePage from '../pages/work-type-page';
import WorkRecentPage from '../pages/work-recent-page';
import AuthorRecentPage from '../pages/author-recent-page';

export default function RoutingComponent()  {
    
    return (
      <Switch>
        <Route path="/authorslist" component={AuthorListPage} />
        <Route path="/authorrecents" component={AuthorRecentPage} />
        <Route path="/authors" component={AuthorPage} />
        <Route path="/chapteradd/:id" component={ChapterAddPage} />
        <Route path="/chapteredit/:id" component={ChapterEditPage} />
        <Route path="/chapterlist/:id" component={ChapterListPage} />
        <Route path="/chaptersearch/:query" component={ChapterSearchPage} />        
        <Route path="/genres" component={GenrePage} />        
        <Route path="/topics" component={TopicPage} />
        <Route path="/workadd/:id" component={WorkAddPage} />
        <Route path="/workcontent/:id" component={WorkContentPage} />
        <Route path="/workedit/:id" component={WorkEditPage} />
        <Route path="/workedits" component={WorkListEditPage} />
        <Route path="/worklist/:id" component={WorkListPage} />
        <Route path="/workrecents" component={WorkRecentPage} />
        <Route path="/worksbyauthor/:id" component={WorkAuthorPage} />
        <Route path="/worktype" component={WorkTypePage} />
        
  

        <Route path="/" component={HomePage} />
        
        
      </Switch>

      
    );
    
}
