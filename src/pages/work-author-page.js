import { useParams } from 'react-router-dom';
import WorkAuthorCard from '../components/work-author-card';



export default function WorkAuthorPage() {
    const params = useParams();   
      return (
  
        <WorkAuthorCard id = {params.id}/>
  
      )
  
  }