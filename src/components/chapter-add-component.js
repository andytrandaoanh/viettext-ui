import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import { WORKS_URL, CHAPTERS_URL } from './api-config.js';
import styled from 'styled-components';


const Styles = styled.div`
.container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    width: 90%;
    margin: auto;
   
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}


.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}


input[type=text], select, textarea {
    width: 100%;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
}


.btn-red {
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


.btn-red:hover {
  background-color: #757de8;
}

.submit-wrap {
  text-align: center;
  width: 100%;
  margin: 12px auto;
}


.btn-small {
  background-color: #3f51b5; 
  border: none; 
  color: white; 
  padding: 5px 10px; 
  font-size: 14px; 
  cursor: pointer; 
  border-radius: 3px;
  width: 80px;
  margin-left: 5px;

}


.btn-small:hover {
  background-color: #757de8;
}

.radio-box {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 1.0em;  
  user-select: none;
  
}

.radio-box input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.radio-mark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #ddd;
  border-radius: 50%;
}

.radio-box:hover input ~ .radio-mark {
  background-color: #ccc;
}

.radio-box input:checked ~ .radio-mark {
  background-color: #1c54b2;
}


.radio-mark:after {
  content: "";
  position: absolute;
  display: none;
}

.radio-box input:checked ~ .radio-mark:after {
  display: block;
}

.radio-box .radio-mark:after {
  top: 6px;
  left: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.check-box {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
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

`



const ChapterAddComponent = (props) => {
  const [workId, setWorkId] = useState(props.workId);  
  const [content, setContent] = useState('');  
  const [note, setNote] = useState('');  
  const [serial, setSerial] = useState(1);  
  const [isError, setIsError] = useState(false);
  const [workLoading, setWorkLoading] = useState(false);
  const [workData, setWorkData] = useState([]);
  const [updateMessage, setUpdateMessage] = useState(null);

  const sendPostRequest = async (newData) => {

    
        //ready to send to API using Axios
        //console.log(newTerm);
        try {
          const resp = await axios.post(CHAPTERS_URL, newData);
          console.log(resp.data);
          setUpdateMessage('Data sucessfully written to the database!');
          //history.push(`/home`);
    
        } catch (err) {
          // Handle Error Here
          console.error(err);
          setUpdateMessage('Error encountered while writing to the database!');
        }
    
      }


    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newData = {
          work_id: parseInt(workId),
          content: content,
          note: note,
          serial: parseInt(serial)
        };
        
        console.log('new data', newData);
        sendPostRequest(newData);
    
      };	

      const handleNext = (event) => {
        event.preventDefault();
        setUpdateMessage(null);
        setSerial(parseInt(serial) + 1);
        setContent('');
        setNote('');
      };	

      useEffect(() => {


        const fetchWorks = async () => {          
          setWorkLoading(true);
    
        try {
            const result = await axios.get(WORKS_URL);
            console.log(result.data);
            setWorkData(result.data);
            setWorkLoading(false);
            
          }     
        catch (error) {
            setIsError(true);
            console.log('error:', error);
          }
     
        };

 
        fetchWorks();


      }, []);  
    
    return (
      <Fragment>
        {isError && <div>Something went wrong when loading API data ...</div>}
        {workLoading  ? <div>Loading</div> : (
     
      <Styles>
      
      

      <div className="container">
      <form >

      <div className="row">
          <div className="col-25">
            <label>Work</label>
          </div>
          <div className="col-75">
          <select id="work_id" value={workId} onChange={(event)=>setWorkId(event.target.value)}>
            {workData.map(item=>{
              return <option value={item.id}>{item.title}</option>
            })}
          </select>
          </div>

        </div>    

        <div className="row">
          <div className="col-25">
            <label>Chapter Title</label>
          </div>
          <div className="col-75">
            <input 
              type="text" 
              id = "note"
              value={note} 
              onChange={(event)=>setNote(event.target.value)}
              />
          </div>
        </div>
        
        <div className="row">
          <div className="col-25">
            <label>Content</label>
          </div>
          <div className="col-75">
            <textarea               
              id = "content"
              rows = "8"
              value={content} 
              onChange={(event)=>setContent(event.target.value)}
              />
          </div>
        </div>


        <div className="row">
          <div className="col-25">
            <label>Serial</label>
          </div>
          <div className="col-75">
            <input 
              type="text" 
              id = "serial"
              value={serial} 
              onChange={(event)=>setSerial(event.target.value)}
              />
          </div>
        </div>        
        <div className="submit-wrap">
            <button 
              className="btn-red" 
              type="submit"
              onClick = {(event)=>handleSubmit(event)}
              >Submit</button>
                          <button 
              className="btn-red" 
              type="submit"
              onClick = {(event)=>handleNext(event)}
              >Next</button>
        </div>

        
        </form>
        <div>{updateMessage}</div>
        </div>
      </Styles>
        )}
      </Fragment>
    );
  };

  export default ChapterAddComponent;