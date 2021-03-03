import { useParams } from 'react-router-dom';
import ChapterDisplayComponent from '../components/chapter-display-component';

export default function WorkContentPage () {
	const params = useParams();  

	return (<ChapterDisplayComponent id = {params.id}/>)
}
