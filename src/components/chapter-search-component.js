import React, { Fragment,  useState, useEffect } from 'react';
import axios from 'axios';
import { CHAPTERS_URL } from './api-config.js';
import Alert from '@material-ui/lab/Alert';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextHighlight from './text-highlight-component';


const Styles = styled.div`
.title-text {
  margin-top: 20px;
}

.text-block {
  margin: 5px 0px;
}

.text-para {
  margin: 20px 0px;
}

.focus {
	font-weight: bold;
}

`



const Highlighted = ({text = '', highlight = ''}) => {
	if (!highlight.trim()) {
	  return <span>{text}</span>
	}
	const regex = new RegExp(`(${highlight})`, 'gi')
	const parts = text.split(regex)
	return (
	  <span>
		 {parts.filter(part => part).map((part, i) => (
			 regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
		 ))}
	 </span>
	)
 }



function TextBlock (props) {
    const parts = props.data.split('\n');
    return(
      <div className='text-block'>
      {parts.map(part=>{
		if (part.includes(props.keyword)) {
			//return  <Highlighted text={part} highlight={props.keyword} />
			return  <TextHighlight text={part} highlight={props.keyword} />

			
		}
        
      })}
      </div>
    
    )
    

}






export default function ChapterSearchComponent (props) {

	const [chapterData, setChapterData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
	   	const fetchData = async () => {
	  		setIsLoading(true);

	      	try {
				setIsError(false);
	    		const result = await axios.get(`${CHAPTERS_URL}/search?content=${props.query}`);          
            	//console.log('search result', result.data);
            	setChapterData(result.data);
				setIsLoading(false);

	  		} catch (error) {

	    		setIsError(true);
				setIsLoading(false);
	  		}

	  		
	  		
	 
	    };
	 
	    fetchData();
	  }, [props.query]);

	return (
    <Styles>

    {isError && <Alert severity="info">No chapters found with your search. Click Home button to return.</Alert>}
    {isLoading ? ( <div>Loading ...</div>) : (


		<Container maxWidth="lg">

			{chapterData.map(chapter=>{

				return(
				<div>	
					<Typography className='title-text'>{chapter.title} - {chapter.signature} - {chapter.notes}</Typography>
					<TextBlock key={chapter.id} data={chapter.content} keyword={props.query}>
					</TextBlock>
				</div>
				)
			})}


        </Container>
    
    
    )}

   

	</Styles>
  )	


}
