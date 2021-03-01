import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WorkAddComponent from '../components/work-add-component';
import WorkEditComponent from '../components/work-edit-component';


export default function GenrePage () {

	return (


        <Tabs>
          <TabList>
            <Tab>Add Work</Tab>
            <Tab>Edit Work</Tab>

          </TabList>
      
          <TabPanel>
            <WorkAddComponent />
          </TabPanel>
          
          <TabPanel>
          <WorkEditComponent />
          </TabPanel>

        </Tabs>

    )
}
