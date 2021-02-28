import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GenreAddComponent from '../components/genre-add-component';
import GenreEditComponent from '../components/genre-edit-component';


export default function GenrePage () {

	return (


        <Tabs>
          <TabList>
            <Tab>Add Genre</Tab>
            <Tab>Edit Genre</Tab>

          </TabList>
      
          <TabPanel>
            <GenreAddComponent />
          </TabPanel>
          
          <TabPanel>
            <GenreEditComponent />
          </TabPanel>

        </Tabs>

    )
}
