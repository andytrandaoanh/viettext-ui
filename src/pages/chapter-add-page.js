import { useParams } from 'react-router-dom';
import ChapterAddComponent from '../components/chapter-add-component';



export default function ChapterAddPage () {
    const params = useParams();   

	return (

            <ChapterAddComponent workId = {params.id}/>

    )
}
