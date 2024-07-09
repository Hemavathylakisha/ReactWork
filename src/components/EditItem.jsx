import React, {useEffect, useState} from 'react';
import {useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditItem = () => {
    const { id } = useParams();
    const [name, setName]= useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchItem = async () =>{
         const response = await axios.get(`http://localhost:5000/items/${id}`);
         setName(response.data.name);
        }
        fetchItem();  
    },[id])
    
    const updateItem = async () =>{
        await axios.put(`http://localhost:5000/items/${id}`, {name});
        navigate('/');
    }
    return(
        <div>
            <h2>Edit Item</h2>
            <input type="text" placeholder='Item name' 
            value={name} onChange={(e)=>setName(e.target.value) } />
            <button onClick={updateItem}>Update an Item</button>
        </div>
    );
};

export default EditItem;