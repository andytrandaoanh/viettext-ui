import React, { Fragment,  useState, useEffect } from 'react';
import axios from 'axios';
import { CHAPTERS_URL, WORKS_URL } from './api-config.js';
import styled from 'styled-components';
import moment from 'moment';
import { AiFillEdit } from 'react-icons/ai';



const Styles = styled.div`

.grid-column-large {
  float: left;
  width: 50%;

}

.grid-column-small {
    float: left;
    width: 50%;
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

form.data-form input[type=text], select , textarea{
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



const ChapterEditComponent = (props) => {
  const [listData, setListData] = useState([]);
  const [listLoading, setListLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [chapterId, setChapterId] = useState();
  const [workId, setWorkId] = useState(1);
  const [content, setContent] = useState('');
  const [note, setNote] = useState('');
  const [serial, setSerial] = useState(0);
  const [statusCheck, setStatusCheck] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);
  const [updateMessage, setUpdateMessage] = useState(null);
  const [workData, setWorkData] = useState([]);
  const [workLoading, setWorkLoading] = useState(false);

  const sendPutRequest = async (newData) => {
    

    try {
      const resp = await axios.put(`${CHAPTERS_URL}/${chapterId}`, newData);
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
        work_id: workId,
        content: content,
        note: note,
        serial: serial,
        status: statusCheck ? 1 : 0
      };
      
  
    sendPutRequest(newData);

  }



  useEffect(() => {

    const fetchChapter = async () => {          
        setListLoading(true);
  
      try {
          const result = await axios.get(`${CHAPTERS_URL}/${props.chapterId}`);
          console.log(result.data);
          setListData(result.data);
          setChapterId(props.chapterId);
          setWorkId(result.data.work_id)
          setContent(result.data.content)
          setNote(result.data.note)
          setListLoading(false);
          
        }     
      catch (error) {
          setIsError(true);
          console.log('error:', error);
        }
   
      };


    const fetchWorks = async () => {          
      setWorkLoading(true);

    try {
        const result = await axios.get(WORKS_URL);
        //console.log(result.data);
        setWorkData(result.data);
        setWorkLoading(false);
        
      }     
    catch (error) {
        setIsError(true);
        console.log('error:', error);
      }
 
    };

    fetchWorks();
    fetchChapter();

  }, []);  
  

    return (
      <Fragment>
        {isError && <div>Something went wrong when loading API data ...</div>}
        {listLoading | workLoading   ? <div>Loading</div> : (
      <Styles>
             <form className="data-form">
             



            <select id="work_id" 
                value={workId} 
                onChange={(event)=>setWorkId(event.target.value)}>
                {workData.map(item=>{
                return <option value={item.id}>{item.id}-{item.title} ({item.signature}) </option>
                })}
            </select>           


            <input 
                type="text" 
                id="note"  
                placeholder="note"
                value={note}
                onChange={(event)=>setNote(event.target.value)}
              
              />

            <input 
                type="text" 
                id="serial"  
                placeholder="serial"
                value={serial}
                onChange={(event)=>setSerial(event.target.value)}
              
              />              

            <textarea                 
                id="content"  
                rows="8"
                placeholder="content"
                value={content}
                onChange={(event)=>setContent(event.target.value)}
              
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

   
      </Styles>
      )}
      </Fragment>

    );
  };

  export default ChapterEditComponent;
