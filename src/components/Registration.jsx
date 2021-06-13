import React from 'react'
import { useFormik, Formik } from 'formik';
import { TextField, Button } from '@material-ui/core';
import styled from 'styled-components';

function Registration() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            address: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))

        }
    });

    return (
        <div>
           <form onSubmit={formik.handleSubmit}>
               <Wrapper>
               <TextField 
               label="Name" 
               value={formik.values.name} 
               name="name" 
               onChange={formik.handleChange}
               />
               </Wrapper>
               <Wrapper>
               <TextField 
               label="Email" 
               value={formik.values.email} 
               name="email" 
               onChange={formik.handleChange}
               />
               </Wrapper>
               <Wrapper>
               <TextField 
               label="Address" 
               value={formik.values.address} 
               name="address" 
               onChange={formik.handleChange}
               />
               </Wrapper>
               <Wrapper>
               <Button variant="contained" color="primary" type="submit">Submit</Button>
               </Wrapper>
               
               </form> 
        </div>
    )
}

export default Registration


const Wrapper = styled.div`
  margin-top: 13px;

`