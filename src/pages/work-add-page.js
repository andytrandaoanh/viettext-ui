import { useParams } from 'react-router-dom';
import WorkAddComponent from '../components/work-add-component';



export default function GenrePage () {
    const params = useParams();   

	return (


            <WorkAddComponent authorId = {params.id}/>

    )
}
