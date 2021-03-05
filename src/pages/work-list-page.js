import { useParams } from 'react-router-dom';
import WorkListComponent from '../components/work-list-component';



export default function GenrePage () {
    const params = useParams();   

	return (


            <WorkListComponent authorId = {params.id}/>

    )
}
