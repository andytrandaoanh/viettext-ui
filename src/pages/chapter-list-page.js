import { useParams } from 'react-router-dom';
import ChapterListComponent from '../components/chapter-list-component';



export default function ChapterListPage () {
    const params = useParams();   

	return (

            <ChapterListComponent workId = {params.id}/>

    )
}
