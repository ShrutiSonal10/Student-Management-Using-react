import React, { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import "./AddEdit.css";
import fireDb from '../../firebase';
import {toast} from "react-toastify";
const initialState = {
  name: "",
  email: "",
  univroll: "",
  contact: "",
  year: "",
  branch: "",
};

const AddEdit = () => {
  const [state, setstate] = useState(initialState);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { name, email, univroll, contact, year, branch } = state;
  const handleInputChange = (e) => {
    const{name,value}=e.target;
    setstate({...state,[name]:value});

  };
  const {id}=  useParams();
  useEffect(()=>{
    fireDb.child("student").on("value",(snapshot)=>{
      if(snapshot.val()!==null){
        setData({...snapshot.val()});
      }
      else{
        setData({});
      }
    });
    return()=>{
      setData({});

    };
  },[id]);
  useEffect(()=>{
if(id){
  setstate({...data[id]});
}
else{
  setstate({...initialState});
}
return()=>{
  setstate({...initialState});
};
  },[id,data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email||!univroll||!branch||!year||!contact){
      toast.error("Please provide value in each input field");
    }
    else{
      fireDb.child("student").push(state,(err)=>{
            if(err){
              toast.error(err);
            }
            else{
              toast.success("student added successfully");
            }
    });
    setTimeout(()=>navigate("/HomeMain"),500);
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeHolder="Your Name"
          value={name ||" "}
          onChange={handleInputChange}
        />
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeHolder="Email"
          value={email ||" "}
          onChange={handleInputChange}
        />
        <label htmlFor="univroll">University Roll Number</label>
        <input
          type="number"
          id="univroll"
          name="univroll"
          placeHolder="University Roll Number"
          value={univroll||" "}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact No.</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeHolder="Contact"
          value={contact||" "}
          onChange={handleInputChange}
        />
        <label htmlFor="year">year</label>
        <input
          type="number"
          id="year"
          name="year"
          placeHolder="Year"
          value={year}
          onChange={handleInputChange}
        />
        <label htmlFor="branch">Branch</label>
        <input
          type="text"
          id="branch"
          name="branch"
          placeHolder="Your branch"
          value={branch||" "}
          onChange={handleInputChange}
        />
        <input type="Submit" value={id?"Update":"Save"} onClick={handleSubmit}/>
      </form>
    </div>
  );
};

export default AddEdit;
