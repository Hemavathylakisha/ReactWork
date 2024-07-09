import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CreateItem = () =>{
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const createItem = async () =>{
        await axios.post('http://localhost:5000/items', { name });
        navigate('/');
    }
    return (
        <div>
            <h2>Create An Item</h2>
            <input type="text" placeholder="Item name" value={name} onChange={(e)=>setName(e.target.value)} />
            <button onClick={createItem}>Create</button>
        </div>
    );
};

export default CreateItem;