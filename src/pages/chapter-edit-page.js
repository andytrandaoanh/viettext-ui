import { useParams } from 'react-router-dom';
import ChapterEditComponent from '../components/chapter-edit-component';


export default function ChapterAddPage () {
    const params = useParams();   

	return (

            <ChapterEditComponent chapterId = {params.id}/>

    )
}
