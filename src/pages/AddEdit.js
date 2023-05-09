import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import './AddEdit.css';
import fireDb from "../firebase";
import {toast} from "react-toastify";

const initialState = {
    name: "",
    email: "",
    comment: "",
}

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  
  const { name, email, comment } = state;

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
        setState({ ...data[id] });
    } else {
        setState({ ...initialState });
    }
    
    return () => {
        setState({ ...initialState });
    };
  }, [id, data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !comment) {
        toast.error("Please provide value in each input failed");
    } else {
     if(!id) {
        fireDb.child("contacts").push(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Information Added Successfully");
          }
        });
     } else {
        fireDb.child(`contacts/${id}`).set(state, (err) => {
            if (err) {
              toast.error(err);
            } else {
              toast.success("Information Update Successfully");
            }
          });
     }
        
     setTimeout(() => navigate("/", {replace:true}), 500);
    }
  };
    return (
    <div style={{marginTop: "100px"}}>
      <form style={{margin: "auto", padding: "15px", maxWidth:"400px", alignContent: "center"}} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Type your name here...." value={name || ""} onChange={handleInputChange} />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Type your email here...." value={email || ""} onChange={handleInputChange} />
        
        <label htmlFor="comment">Comment</label>
        <input type="text" id="comment" name="comment" placeholder="Type your comment here...." value={comment || ""} onChange={handleInputChange} />        
      
        <input type="submit" value={id ? "Update" : "Save"} />

      </form>
    </div>
  )
}

export default AddEdit;
