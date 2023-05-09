import React, {useState, useEffect} from 'react';
import fireDb from "../firebase";
import {useParams, Link} from "react-router-dom";
import "./View.css"


const View = () => {
  const [user, setUser] = useState({});

  const {id} = useParams();

  useEffect(() => {
    fireDb.child(`contacts/${id}`).get().then((snapshot) => {
      if(snapshot.exists()) {
        setUser({ ...snapshot.val() });
      } else {
        setUser({});
      } 
    });
  }, [id]);

  console.log("user", user);
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Information Details</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{user.name}</span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>{user.email}</span>
          <br />
          <br />
          <strong>Comments: </strong>
          <span>{user.comment}</span>
          <br />
          <br />
          <Link to="/crudInfo">
            <button className="btn btn-edit">Go Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default View