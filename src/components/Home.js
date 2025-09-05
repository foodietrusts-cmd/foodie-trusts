import React, {useState, useEffect} from 'react';
import { getFoodsList } from '../api/openai';


const Home = () => {
    const [zip, setZip] = useState('');
    const [hotels, setHotels] = useState([]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(zip);
        let hotel = await getFoodsList(zip);
        setHotels(hotel);
        
    };

    useEffect(() => {

    },[])

    return (
        <>
          <input value={zip} onChange={e => setZip(e.target.value)} placeholder="Enter ZIP code" />
          <button onClick={handleSubmit} type="button">Search</button>
        
        {hotels?.length > 0 &&
          <table border="1">
                <thead><th>Dish</th><th>Description</th><th>Hotel</th><th>App</th></thead>
                <tbody>
                {hotels.map((data) => {
                    return(
                        <tr>
                            <td>{data.dish}</td>
                            <td>{data.description}</td>
                            <td>{data.place}</td>
                            <td>{data.app}</td>
                        </tr>
                    )
                })}   
                </tbody> 
          </table>  
        }
        </>
    );
}

export default Home;