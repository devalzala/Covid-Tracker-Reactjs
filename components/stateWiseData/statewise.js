import React, { useEffect, useState } from 'react';

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
       const res = await fetch('https://api.covid19india.org/data.json');
       const actualData = await res.json();
       console.log(actualData.statewise);
       setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return(
        <>

            <div className='container-fluid mt-5'>
                <div className="main-heading">
                <h3 className="mb-5 text-center"> INDIA COVID-19 DashBoard</h3>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className='thead-dark'>
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
                                        <tr>
                                            <td>{curElem.state}</td>
                                            <td>{curElem.confirmed}</td>
                                            <td>{curElem.recovered}</td>
                                            <td>{curElem.deaths}</td>
                                            <td>{curElem.active}</td>
                                            <td>{curElem.lastupdatedtime}</td>
                                        </tr>
                                    );
                                })
                            }
                           

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}

export default Statewise;