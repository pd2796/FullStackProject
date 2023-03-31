import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';
import xtype from 'xtypejs'


const AddEmployeeComponent = () => {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [emailId,setEmailId] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();

const saveOrUpdateEmployee = (e) =>{
    e.preventDefault();

    const employee = {firstName,lastName,emailId}

    if(id){
        
        console.log(employee)
            EmployeeService.updateEmployee(id,employee).then((response)=>{
                console.log(response)
                navigate('/employees')
            }).catch(error => {
                console.log(error)
            })
    }else{
        
    EmployeeService.createEmployee(employee).then((response)=>{
        console.log(employee)
    
        navigate('/employees');    
        }).catch(error => {
            console.error(error);
        })
    }

}
    useEffect(() =>{
        EmployeeService.getEmployeeById(id).then((response)=>{
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmailId(response.data.emailId);
        }).catch(error=>{
            console.error(error);
        })
    },[])

    const title = () =>{
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else
        {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

  return (
    <div>
        <br/>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <br/>
                    {title()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>
                                    First Name :
                                    <input
                                    type="text"
                                    placeholder="Enter First Name"
                                    name="firstName"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(e)=>setFirstName(e.target.value)}
                                    ></input> 
                                </label>
                                <div className="form-group mb-2">
                                <label className='form-label'>
                                    Last Name :
                                    <input
                                    type="text"
                                    placeholder="Enter Last Name"
                                    name="lastName"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e)=>setLastName(e.target.value)}
                                    ></input> 
                                </label>
                                </div>
                                <div className="form-group mb-2">
                                <label className='form-label'>
                                    Email :
                                    <input
                                    type="text"
                                    placeholder="Enter Email Id"
                                    name="emailId"
                                    className="form-control"
                                    value={emailId}
                                    onChange={(e)=>setEmailId(e.target.value)}
                                    ></input> 
                                </label>
                                </div>
                            </div>
                            <button className='btn btn-success' onClick={(e)=>saveOrUpdateEmployee(e)}>Submit</button>
                        </form>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default AddEmployeeComponent
