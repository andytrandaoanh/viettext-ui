import React, { Fragment,  useState, useEffect } from 'react';
import axios from 'axios';
import { WORKS_URL, CHAPTERS_URL  } from './api-config.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';


const Styles = styled.div`
.title-text {
  margin: 20px 0px;
}

.text-block {
  margin: 40px 0px;
}

.text-para {
  margin: 20px 0px;
}



`


function TextBlock (props) {
    const parts = props.data.split('\n');
    return(
      <div className='text-block'>
      {parts.map(part=>{
        return  <Typography className='text-para'>{part}</Typography>
      })}
      </div>
    
    )
    

}

export default function ChapterDisplayComponent(props) {
    
    const [work, setWork] = useState([]);
    const [isWorkLoading, setIsWorkLoading] = useState(false);
    const [chapterData, setChapterData] = useState([]);
    const [isChapterLoading, setIsChapterLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
  
    useEffect(() => {
      const fetchWorkData = async () => {
        setIsError(false);
        setIsWorkLoading(true);
  
        try {
          const result = await axios(`${WORKS_URL}/${props.id}`);        
          setWork(result.data);        
          //console.log('work data: ', result.data);
          setIsWorkLoading(false);
   
        } catch (error) {
          setIsError(true);
        }
  
       
      };
      const fetchChapterData = async () => {
        setIsError(false);
        setIsChapterLoading(true);
  
        try {
          const result = await axios(`${CHAPTERS_URL}/search?workid=${props.id}`);        
          setChapterData(result.data);        
          //console.log('chapters:', result.data);
          setIsChapterLoading(false);
   
        } catch (error) {
          setIsError(true);
        }
  
       
      };
      fetchWorkData();
      fetchChapterData();
    }, []);  
  
    return (
      <Fragment>
      {isError && <div>Something went wrong when loading API data ...</div>}
      {isWorkLoading | isChapterLoading ? <div>Loading...</div> :
      <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Styles>
        <Typography className='title-text' variant="h4"  gutterBottom>
          {work.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
         {work.signature}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {work.notes}
      </Typography>
      
      {chapterData.map(chapter =>(
            <TextBlock key={chapter.id} data={chapter.content}>
            </TextBlock>
      ))}
      </Styles>
      </Container>
      </Fragment>
      
      }
      
      
      
      </Fragment>
    );
  }
  