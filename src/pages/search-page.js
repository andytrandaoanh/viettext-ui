import { useParams } from 'react-router-dom';
import ChapterSearchComponent from '../components/chapter-search-component';


export default function SearchPage () {

	
    // retrieve params into a variable
    const params = useParams();   

	return ( 

		<ChapterSearchComponent query = {params.query}/>            

		)
}
