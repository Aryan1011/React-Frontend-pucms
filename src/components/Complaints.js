import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useParams
} from "react-router-dom";
import Details from './complaintComponents/Details'
function Complaints() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => { setData(response.data) });

    }, [])




    return (
      <div>
        <h1> Complaints </h1>
        <Link to="/comp/9">
            hiii 
        </Link>
        </div>

    );
}



export default Complaints
