import React, { Fragment,  useState, useEffect } from 'react';
import axios from 'axios';
import { AUTHORS_URL } from './api-config.js';
import styled from 'styled-components';
import moment from 'moment';
import { useHistory } from "react-router-dom";



const Styles = styled.div`

.grid-column {
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
  width: 90%;

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
  font-size: 11px; 
  cursor: pointer; 
  border-radius: 3px;
  margin: 0px 5px;
}

.data-button:hover{
  background: orange;
}

.list-button {
  background-color: #1769aa; 
  border: none; 
  color: white; 
  padding: 5px 8px; 
  font-size: 11px; 
  cursor: pointer; 
  border-radius: 3px;
  margin: 0px 5px;
}

.list-button:hover{
  background: #2196f3;
}



`




export default function WorkListComponent()  {
  const history = useHistory();
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleEdit = (event, id)=>{
    history.push(`/workedit/${id}`);
    event.preventDefault();
  }

  const handleAdd = (event, id)=>{
    history.push(`/workadd/${id}`);
    event.preventDefault();
  }

  const handleList = (event, id)=>{
    history.push(`/worklist/${id}`);
    event.preventDefault();
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

    try {
        const result = await axios.get(`${AUTHORS_URL}/search?recentupdate=yes`);
        console.log(result.data);
        setListData(result.data);
        setIsLoading(false);
        
      }     
    catch (error) {
        setIsError(true);
        console.log('error:', error);
      }
 
    };
 
    fetchData();
  }, []);  

  
  

    return (
      <Fragment>
      {isError && <div>Something went wrong when loading API data ...</div>}
      {isLoading ? ( <div>Loading ...</div>) : (
      <Styles>
     <table className="data-grid">
     <thead>
     <tr>
      <th>ID</th>
       <th>Name</th>
       <th>Type</th>
       <th>Status</th>       
       <th>Date</th>
       <th>Add</th>
       <th>List</th>
       
 
     
     </tr>
     </thead>
     <tbody>

     {listData.map(row =>(
      <tr>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.type}</td>
        <td>{row.status}</td>        
        <td>{moment(row.created_at).format('DD/MM/YYYY')}</td>
        <td><button className="data-button" onClick={(event)=>handleAdd(event, row.id)}>Add Work</button></td>
        <td><button className="list-button" onClick={(event)=>handleList(event, row.id)}>List Works</button></td>
        

      </tr>
       ))
     }  
     
     </tbody>
   </table>
      </Styles>
      )}
      </Fragment>

    );
  };

