import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WorkListEdits from '../components/work-list-edits';


export default function WorkTypePage () {

	return (


        <Tabs>
          <TabList>
            <Tab>Stories</Tab>
            <Tab>Novels</Tab>
            <Tab>Poems</Tab>
            <Tab>Articles</Tab>
            <Tab>Essays</Tab>
            <Tab>Memoirs</Tab>

          </TabList>
      
          <TabPanel>
            <WorkListEdits genreId={1} />
          </TabPanel>
          
          <TabPanel>
            <WorkListEdits genreId={2}/>
          </TabPanel>

          <TabPanel>
            <WorkListEdits genreId={3}/>
          </TabPanel>

          <TabPanel>
            <WorkListEdits genreId={4}/>
          </TabPanel>

          <TabPanel>
            <WorkListEdits genreId={5}/>
          </TabPanel>
          <TabPanel>
            <WorkListEdits genreId={6}/>
          </TabPanel>
        </Tabs>

    )
}
