import { useParams } from 'react-router-dom';
import WorkRecentComponent from '../components/work-recent-component';



export default function WorkRecentPage () {
    const params = useParams();   

	return (


            <WorkRecentComponent />

    )
}
