import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ChapterAddComponent from '../components/chapter-add-component';
import ChapterEditComponent from '../components/chapter-edit-component';


export default function GenrePage () {

	return (


        <Tabs>
          <TabList>
            <Tab>Add Chapter</Tab>
            <Tab>Edit Chapter</Tab>

          </TabList>
      
          <TabPanel>
            <ChapterAddComponent />
          </TabPanel>
          
          <TabPanel>
            <ChapterEditComponent />
          </TabPanel>

        </Tabs>

    )
}
