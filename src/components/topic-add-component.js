import React, { useState } from "react";
import axios from 'axios';
import { TOPICS_URL } from './api-config.js';
import styled from 'styled-components';


const Styles = styled.div`
.container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    width: 50%;
    margin: auto;
   
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  

.col-25 {
  float: left;
  width: 35%;
  margin-top: 6px;
}


.col-75 {
  float: left;
  width: 65%;
  margin-top: 6px;
}


input[type=text], select, textarea{
    width: 60%;
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



const TopicAddComponent = () => {
  const [description, setDescription] = useState('');  
  const [sortCode, setSortCode] = useState('');  
  const [updateMessage, setUpdateMessage] = useState(null);

    const sendPostRequest = async (newData) => {

    
        //ready to send to API using Axios
        //console.log(newTerm);
        try {
          const resp = await axios.post(TOPICS_URL, newData);
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
          description: description,
          sort_code: sortCode
        };
        
        //console.log(newData);
        sendPostRequest(newData);
    
      };	

      

    return (
      <Styles>
      <div className="container">
      <form >

        <div className="row">
          <div className="col-25">
            <label>Topic Description</label>
          </div>
          <div className="col-75">
            <input 
              type="text" 
              id = "description"
              value={description} 
              onChange={(event)=>setDescription(event.target.value)}
              />
          </div>
        </div>
   
        <div className="row">
          <div className="col-25">
            <label>Sort Code</label>
          </div>
          <div className="col-75">
            <input 
              type="text" 
              id = "sort_code"
              value={sortCode} 
              onChange={(event)=>setSortCode(event.target.value)}
              />
          </div>
        </div>


        <div className="submit-wrap">
            <button 
              className="btn-red" 
              type="submit"
              onClick = {(event)=>handleSubmit(event)}
              >Submit</button>
        </div>

        
        </form>
        <div>{updateMessage}</div>
        </div>
      </Styles>
    
    );
  };

  export default TopicAddComponent;