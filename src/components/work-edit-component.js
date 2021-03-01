import React, { Fragment,  useState, useEffect } from 'react';
import axios from 'axios';
import { GENRES_URL, TOPICS_URL, WORKS_URL, AUTHORS_URL } from './api-config.js';
import styled from 'styled-components';
import moment from 'moment';
import { AiFillEdit } from 'react-icons/ai';



const Styles = styled.div`

.grid-column-large {
  float: left;
  width: 65%;

}

.grid-column-small {
    float: left;
    width: 35%;
 }

  

.grid-row:after {
  content: "";
  display: table;
  clear: both;
}

table.data-grid {
  border-collapse: collapse;
  margin: 10px;
  font-size: 0.8em;

}

table.data-grid td, th {
  border: 1px solid #999;
  padding: 0.5rem;
  text-align: left;
}

table.data-grid th {
  color: white;
  background: #1c54b2;
}


table.data-grid tr:nth-child(even) {
  background-color: #f2f2f2;
}

.data-button {
  background-color: #4caf50; 
  border: none; 
  color: white; 
  padding: 5px 8px; 
  font-size: 14px; 
  cursor: pointer; 
}

.data-button:hover{
  background: orange;
}

form.data-form {
  padding: 0px 20px;
}

form.data-form input[type=text], select {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}



.check-box {
  display: block;
  position: relative;
  padding-left: 35px;
  marign-top: 22px;  
  cursor: pointer;
  font-size: 1.0em;
  user-select: none;
}

.check-box input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.check-mark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #ddd;
}

.check-box:hover input ~ .check-mark {
  background-color: #ccc;
}

.check-box input:checked ~ .check-mark {
  background-color: #e91e63;
}

.check-mark:after {
  content: "";
  position: absolute;
  display: none;
}

.check-box input:checked ~ .check-mark:after {
  display: block;
}

.check-box .check-mark:after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.submit-wrap {
  text-align: center;
  width: 100%;
  margin: 12px auto;
}

.submit-wrap button {
  background-color: #3f51b5; 
  border: none; 
  color: white; 
  padding: 10px 16px; 
  font-size: 16px; 
  cursor: pointer; 
  border-radius: 5px;
  width: 150px;
  margin-left: 5px;

}


.submit-wrap button:hover {
  background-color: #757de8;
}

.message-box {
  text-align: center;
  font-size: 0.9em;
}


`



const DataTable = ({data, onChange}) => {

const handleClick = (event, id)=>{  
  onChange(id);
}

 return(
   <table className="data-grid">
     <thead>
     <tr>
       <th>ID</th>
       <th>Title</th>
       <th>Author</th>
       <th>Genre</th>
       <th>Topic</th>
       <th>Signature</th>
       <th>Published</th>
       <th>Notes</th>
       <th>Status</th>
       <th>Date</th>
       <th>Action</th>
     
     </tr>
     </thead>
     <tbody>

     {data.map(row =>(
      <tr>
        <td>{row.id}</td>
        <td>{row.title}</td>        
        <td>{row.author_id}</td>
        <td>{row.genre_id}</td>
        <td>{row.topic_id}</td>
        <td>{row.signature}</td>
        <td>{row.published_year}</td>
        <td>{row.notes}</td>
        <td>{row.status}</td>
        <td>{moment(row.created_at).format('DD/MM/YYYY')}</td>
        <td><button className="data-button" onClick={(event)=>handleClick(event, row.id)}><AiFillEdit /></button></td>
      </tr>
       ))
     }  
     
     </tbody>
   </table>
 )
}


const WorkEditComponent = () => {
  const [listData, setListData] = useState([]);
  const [listLoading, setListLoading] = useState([false]);
  const [isError, setIsError] = useState(false);
  const [workId, setWorkId] = useState();
  const [title, setTitle] = useState('');
  const [sortCode, setSortCode] = useState('');
  const [statusCheck, setStatusCheck] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);
  const [updateMessage, setUpdateMessage] = useState(null);
  const [genreData, setGenreData] = useState([]);
  const [genreLoading, setGenreLoading] = useState([false]);
  const [topicData, setTopicData] = useState([]);
  const [topicLoading, setTopicLoading] = useState([false]);
  const [authorData, setAuthorData] = useState([]);
  const [authorLoading, setAuthorLoading] = useState([false]);
  const [authorId, setAuthorId] = useState("1");
  const [genreId, setGenreId] = useState("1");
  const [topicId, setTopicId] = useState("1");
  const [signature, setSignature] = useState('');  
  const [publishedYear, setPublishedYear] = useState('');      
  const [notes, setNotes] = useState('');   

  const sendPutRequest = async (newData) => {
    

    try {
      const resp = await axios.put(`${WORKS_URL}/${workId}`, newData);
      console.log(resp.data);
      setUpdateMessage('Data sucessfully written to the database!');   
      setUpdateCount(updateCount + 1);

    } catch (err) {      
      console.error(err);
      setUpdateMessage('Error encountered while writing to the database!');
    }

  }




  const handleSubmit = () =>{
    

    const newData = {
        title: title,
        sort_code: sortCode,
        author_id: parseInt(authorId),
        genre_id: parseInt(genreId),
        topic_id: parseInt(topicId),
        published_year: parseInt(publishedYear),
        notes: notes,
        signature: signature,
        status: statusCheck ? 1 : 0
      };
      
  
    sendPutRequest(newData);

  }


  const tableClick = (selectId) => {
    console.log('user select id: ', selectId);
    setWorkId(selectId);
    listData.forEach(item =>{
      if (item.id === selectId) {
        setTitle(item.title);
        setSortCode(item.sort_code);
        setAuthorId(String(item.author_id))
        setGenreId(String(item.genre_id))
        setTopicId(String(item.topic_id))
        setSignature(item.signature);
        setPublishedYear(String(item.published_year));
        setNotes(item.notes);
        setStatusCheck(item.status === 0 ? false : true);
        setUpdateMessage(null);

        }
      }
    )
  }

  useEffect(() => {

    const fetchWorks = async () => {          
        setListLoading(true);
  
      try {
          const result = await axios.get(WORKS_URL);
          console.log(result.data);
          setListData(result.data);
          setListLoading(false);
          
        }     
      catch (error) {
          setIsError(true);
          console.log('error:', error);
        }
   
      };


    const fetchAuthors = async () => {          
      setAuthorLoading(true);

    try {
        const result = await axios.get(AUTHORS_URL);
        console.log(result.data);
        setAuthorData(result.data);
        setAuthorLoading(false);
        
      }     
    catch (error) {
        setIsError(true);
        console.log('error:', error);
      }
 
    };

    const fetchGenres = async () => {          
      setGenreLoading(true);

    try {
        const result = await axios.get(GENRES_URL);
        //console.log(result.data);
        setGenreData(result.data);
        setGenreLoading(false);
        
      }     
    catch (error) {
        setIsError(true);
        console.log('error:', error);
      }
 
    };
    const fetchTopics = async () => {          
      setTopicLoading(true);

    try {
        const result = await axios.get(TOPICS_URL);
        //console.log(result.data);
        setTopicData(result.data);
        setTopicLoading(false);
        
      }     
    catch (error) {
        setIsError(true);
        console.log('error:', error);
      }
 
    };        
    fetchWorks();
    fetchAuthors();
    fetchGenres();
    fetchTopics();

  }, []);  
  

    return (
      <Fragment>
        {isError && <div>Something went wrong when loading API data ...</div>}
        {listLoading | authorLoading | genreLoading | topicLoading  ? <div>Loading</div> : (
      <Styles>
        <div className="grid-row">
          <div className="grid-column-large"><DataTable data={listData} onChange={tableClick}/></div>
          <div className="grid-column-small">
            <form className="data-form">
             
              <input 
                type="text" 
                id="title"  
                placeholder="title"
                value={title}
                onChange={(event)=>setTitle(event.target.value)}
              
              />
             
              <input 
                type="text" 
                id="sort_code"  
                placeholder="sort code"
                value={sortCode}
                onChange={(event)=>setSortCode(event.target.value)}
              
              />

            <select id="author_id" 
                value={authorId} 
                onChange={(event)=>setAuthorId(event.target.value)}>
                {authorData.map(item=>{
                return <option value={item.id}>{item.id}-{item.name}</option>
                })}
            </select>           

            <select id="genre_id" value={genreId} onChange={(event)=>setGenreId(event.target.value)}>
                {genreData.map(item=>{
                    return <option value={item.id}>{item.id}-{item.description}</option>
                })}
            </select>
            <select id="topic_id" value={topicId} onChange={(event)=>setTopicId(event.target.value)}>
                {topicData.map(item=>{
                    return <option value={item.id}>{item.id}-{item.description}</option>
                })}
            </select>


            <input 
                type="text" 
                id="signature"  
                placeholder="signature"
                value={signature}
                onChange={(event)=>setSignature(event.target.value)}
              
              />
            <input 
                type="text" 
                id="published_year"  
                placeholder="published year"
                value={publishedYear}
                onChange={(event)=>setPublishedYear(event.target.value)}
              
              />

            <input 
                type="text" 
                id="notes"  
                placeholder="notes"
                value={notes}
                onChange={(event)=>setNotes(event.target.value)}
              
              />              

              <label className="check-box">Disabled
                <input type="checkbox"  name="status"  checked={statusCheck}
                onChange={(event)=>setStatusCheck(event.target.checked)}
              
                />
              <span className="check-mark"></span>



                </label>  
              <div className="submit-wrap">
              <button               
                type="button"
                onClick = {(event)=>handleSubmit(event)}
              >

                Submit
              </button>
              </div>
              <div className="message-box">{updateMessage}</div>
            </form>

          </div>
        </div> 
      </Styles>
      )}
      </Fragment>

    );
  };

  export default WorkEditComponent;
