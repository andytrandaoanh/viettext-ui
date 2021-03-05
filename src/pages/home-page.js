
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AuthorCardComponent from '../components/author-card-component';
import WorkCardComponent from '../components/work-card-component';


export default function HomePage () {

	return (


        <Tabs>
          <TabList>
            <Tab>Recent Works</Tab>
            <Tab>Publishers</Tab>

          </TabList>
      
          <TabPanel>
            <WorkCardComponent />
          </TabPanel>
          
          <TabPanel>
            <AuthorCardComponent />
          </TabPanel>

        </Tabs>

    )
}
