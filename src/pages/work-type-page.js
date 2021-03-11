import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WorkTypeComponent from '../components/work-type-component';


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
            <WorkTypeComponent genreId={1} />
          </TabPanel>
          
          <TabPanel>
            <WorkTypeComponent genreId={2}/>
          </TabPanel>

          <TabPanel>
            <WorkTypeComponent genreId={3}/>
          </TabPanel>

          <TabPanel>
            <WorkTypeComponent genreId={4}/>
          </TabPanel>

          <TabPanel>
            <WorkTypeComponent genreId={5}/>
          </TabPanel>
          <TabPanel>
            <WorkTypeComponent genreId={6}/>
          </TabPanel>
        </Tabs>

    )
}
