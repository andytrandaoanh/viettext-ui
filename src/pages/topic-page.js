import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TopicAddComponent from '../components/topic-add-component';
import TopicEditComponent from '../components/topic-edit-component';


export default function TopicPage () {

	return (


        <Tabs>
          <TabList>
            <Tab>Add Topic</Tab>
            <Tab>Edit Topic</Tab>

          </TabList>
      
          <TabPanel>
            <TopicAddComponent />
          </TabPanel>
          
          <TabPanel>
            <TopicEditComponent />
          </TabPanel>

        </Tabs>

    )
}
