import React,{useState, useEffect} from 'react'
import fireDb from '../../firebase';
import {Link} from 'react-router-dom';
import "./HomeMain.css";
import {toast} from "react-toastify";

const Home = () => {
  const [data,setData]= useState({});
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
  },[]);
  const onDelete=(id)=>{
   if(window.confirm("Are you sure you want to delete??")){
        fireDb.child(`student/${id}`).remove((err)=>{
          if(err){
            toast.error(err);
          }
          else{
            toast.success("student deleted successfully");
          }
        })
   }
  }
  return (
    <div style={{marginTop:"100px"}}>
    <table className="styled-table">
      <thead>
        <tr>
          <th style={{textAlign:"center"}}>No.</th>
          <th style={{textAlign:"center"}}>Name</th>
          <th style={{textAlign:"center"}}>Email</th>
          <th style={{textAlign:"center"}}>Contact</th>
          <th style={{textAlign:"center"}}>Univ. Roll</th>
          <th style={{textAlign:"center"}}>Year</th>
          <th style={{textAlign:"center"}}>Branch</th>
          <th style={{textAlign:"center"}}>Action</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((id,index)=>{
          return(
            <tr key={id}>
              <th scope='row'>{index+1}</th>
              <td>{data[id].name}</td>
              <td>{data[id].email}</td>
              <td>{data[id].contact}</td>
              <td>{data[id].univroll}</td>
              <td>{data[id].year}</td>
              <td>{data[id].branch}</td>
              <td>
                <Link to={`/update/${id}`}>
                  <button btn btn-edit>Edit</button>
                </Link>
              <button btn btn-delete onClick={()=>{onDelete(id)}}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
      </div>
  )
}

export default Home;