import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AuthorAddComponent from '../components/author-add-component';
import AuthorEditComponent from '../components/author-edit-component';


export default function AuthorPage () {

	return (


        <Tabs>
          <TabList>
            <Tab>Add Author</Tab>
            <Tab>Edit Author</Tab>

          </TabList>
      
          <TabPanel>
            <AuthorAddComponent />
          </TabPanel>
          
          <TabPanel>
            <AuthorEditComponent />
          </TabPanel>

        </Tabs>

    )
}
