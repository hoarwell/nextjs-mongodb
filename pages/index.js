import Image from 'next/image';
import { connectToDatabase } from '../util/mongodb';
import axios from 'axios';
import { useState } from 'react';


export const getServerSideProps = async () => {
  const { db } = await connectToDatabase();
  const data = await db.collection('movies').find({}).limit(50).toArray();
  const movies = JSON.parse(JSON.stringify(data));
  return {
      props : {
          movies,
      }
  }
}

const Home = ({ movies }) => {
    const [ modal, setModal ] = useState(false);
    
    const handleClick = async (movie) => {
        const response = await axios.get(`http://localhost:3000/api/movie?_id=${movie._id}`);
        setModal(response.data)
        console.log(response.data)
    }

    return (
        <div className="container">
            {
                movies ? movies.map((movie) => (
                    <div>
                        <div>
                            <small>{ movie.title } { movie.year } </small><br />
                            { 
                                movie.poster ? <Image src = { movie.poster } width = "100px" height = "100px" /> 
                                            : <small style = {{ color : "red" }}>no poster image</small> }<br />
                            <small>{ movie.plot }</small>
                            <button onClick = { () => handleClick(movie) }>detail</button>
                        </div>
                        <br />
                    </div>
                )) : ""
            }
            {
                modal ? <>
                  <div style = {{ boroder: "1px solid black", width : "400px", height: "600px", position: "fixed", top: "0", right : "150px", backgroundColor: "grey"}}>
                      <img style = {{ width: "300px" }} src = { modal.poster } />
                      <p>{ modal.title } ({modal.year})</p>
                      <p>{ modal.plot }</p>
                      <button onClick = { (e) => {
                        e.preventDefault();
                        setModal(false);
                      } }>close</button>
                  </div>
                </> : ""
            }
        </div>
    )
}

export default Home;
