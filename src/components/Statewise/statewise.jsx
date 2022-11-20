import React, {useEffect, useState} from 'react'
import './statewise.css'

const URL = 'https://data.covid19india.org/data.json';
const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
       
            const res = await fetch(URL);
            const Data = await res.json();
            console.log(Data.statewise);
            setData(Data.statewise);
      
    }

useEffect(() => {
   getCovidData();
}, [])


  return (
    <>
        <div >
            
           <center> <h1 className="title">INDIA COVID-19 DASHBOARD</h1></center>
            </div>
            <div className="table-responsive">
            <table className="table table-hover">
                <thead className="table-header">
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updated</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((curElem, ind) => {
                        return(
                            <tr key={ind}>
                                <td>{curElem.state}</td>
                                <td>{curElem.confirmed}</td>
                                <td>{curElem.recovered}</td>
                                <td>{curElem.deaths}</td>
                                <td>{curElem.active}</td>
                                <td>{curElem.lastupdatedtime}</td>
                            </tr>
                        )
                    })
                }
         
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Statewise