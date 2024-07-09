import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        FetchItems(); 
    },[])
    const FetchItems = async () =>{
        const response = await axios.get(`http://localhost:5000/items`);
        setItems(response.data);
    }
    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:5000/items/${id}`);
        FetchItems();
    }
  return (
    <div>
      <h2>Items</h2>
      <Link to="/create">Create an item</Link>
      <ul>
        {
                items.map((item => ( 
                        <li key={item.id}>
                            {item.name} &nbsp;
                            <Link to={`/edit/${item.id}`}>Edit</Link>
                            <button onClick={() => deleteItem(item.id)}>Delete</button>
                        </li>
                )))
         }
      </ul>
    </div>
  );
};

export default Home;
