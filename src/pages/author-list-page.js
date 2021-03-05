import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AuthorListComponent from '../components/author-list-component';


export default function AuthorPage () {

	return (


        <Tabs>
          <TabList>
            <Tab>Magazines</Tab>
            <Tab>Writers</Tab>

          </TabList>
      
          <TabPanel>
            <AuthorListComponent type={1} />
          </TabPanel>
          
          <TabPanel>
            <AuthorListComponent type={0}/>
          </TabPanel>

        </Tabs>

    )
}
