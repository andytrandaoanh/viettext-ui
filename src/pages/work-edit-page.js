import { useParams } from 'react-router-dom';
import WorkEditComponent from '../components/work-edit-component';


export default function WorkAddPage () {
    const params = useParams();   

	return (

            <WorkEditComponent workId = {params.id}/>

    )
}
