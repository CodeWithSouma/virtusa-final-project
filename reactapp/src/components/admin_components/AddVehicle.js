import * as React from 'react';
import '../../index.css';
 
//import Navbar from '../user_components/Navbar';
import TextField from '@mui/material/TextField';
import {Container,Paper,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import  { useState } from "react";

const useStyles=makeStyles((theme)=>
({
    root:{
        '& > *':{
            margin:theme.spacing(1),
        },
    },
}));




export default function AddVehicle() {
  
    const paperstyle={padding:"50px 20px",width:600,margin :"20px auto" }
    const[name,setName]=useState('')
    const[timing,setTiming]=useState('')
    const[fromTo,setfromTo]=useState('')
    const[imageURL,setImageUrl]=useState('')
    const[fair,setFair]=useState('')
    const[capacity,setCapacity]=useState('')
    const[description,setDescription]=useState('')
   


      
    let[nameError,setNameError]=useState(false)
    let[timingError,setTimingError]=useState(false)
    let[fromToError,setFromToError]=useState(false)
    let[imageUrlError,setImageUrlError]=useState(false)
    let[fairError,setFairError]=useState(false)
    let[capacityError,setCapacityError]=useState(false)
    let[descriptionError,setDescriptionError]=useState(false)

   // const [students,setStudents]=useState([])
    const classes=useStyles();

    const handleClick=(e)=>
    {


        if(name==''){setNameError(true)}
        if(timing==''){setTimingError(true)}
        if(fromTo==''){setFromToError(true)}
        if(imageURL==''){setImageUrlError(true)}
        if(fair==''){setFairError(true)}
        if(capacity==''){setCapacityError(true)}
        if(description==''){setDescriptionError(true)}

//form validation




        e.preventDefault()

       setNameError=('false')
       setTimingError=('false')
       setFromToError=('false')
       setImageUrlError=('false')
       setFairError=('false')
       setCapacityError=('false')
       setDescriptionError=('false')

        

        const vehicle={name,timing,fromTo,imageURL,fair,capacity,description}
        
        fetch("http://localhost:8080/admin/AddVehicle",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(vehicle)
        }).then(()=>{
            
        })
    }




  return (
    <>
       

      <Container>
        <Paper elevation={7} style={paperstyle}>
       <center><h3>Add Vehicle</h3></center> 
        <form  class="needs-validation" noValidate  autoComplete='off'>
      
      <TextField id="addName" label="Enter Name"  variant="outlined"  fullWidth
      value={name}
      error={nameError}
      onChange={(e)=>setName(e.target.value)}
       required />
      <br/>


      <TextField id="addTiming" label="Enter Available Timing" variant="outlined" fullWidth
      value={timing}
      error={timingError}
      onChange={(e)=>setTiming(e.target.value)}
     required />
      <br/>



      <TextField id="addFromTo" label="Enter the From and To" variant="outlined"  fullWidth
      value={fromTo}
      error={fromToError}
      onChange={(e)=>setfromTo(e.target.value)}
     required />
       <br/>


      <TextField id="addImageUrl" label="Enter the Image Url" variant="outlined" fullWidth
      value={imageURL}
      error={imageUrlError}
      onChange={(e)=>setImageUrl(e.target.value)}
      required/>
       <br/>

       <TextField id="addPrice" label="Enter the fair per person" variant="outlined" fullWidth
      value={fair}
      error={fairError}
      onChange={(e)=>setFair(e.target.value)}
      required/>
       <br/>

       <TextField id="Traincapacity" label="Enter no of capacity" variant="outlined" fullWidth
      value={capacity}
      error={capacityError}
      onChange={(e)=>setCapacity(e.target.value)}
      required/>
       <br/>

       <TextField id="addDescription" label="Description about product" variant="outlined" fullWidth
      value={description}
      error={descriptionError}
      onChange={(e)=>setDescription(e.target.value)}
      required/>
       <br/>

    <br></br>
    <center> <Button variant="contained" id="addButton" color="secondary" onClick={handleClick}  style={{ backgroundColor: "#570000"}}>Add</Button></center> 
      </form>
    </Paper>
    </Container> 

    
</>
  );
}
