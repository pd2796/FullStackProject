import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ListEmployeeComponent = () => {
  const [employees,setEmployees] = useState([])

  useEffect(()=>{
    getAllEmployees();
    },[]);
   
    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response)=>{
            setEmployees(response.data)
            console.log(response.data)
        }).catch(error =>{
                console.error(error);
        })
    }
   
    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then((response)=>{
            getAllEmployees();
        }).catch(error =>{
            console.error(error);
        })
    }
    return (
    <div className="container">
      <h2 className="test-center">List Employees</h2>
      <Link to = "/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
      <table className="table table-bordered border-striped">
            <thead>
                <th>
                    Employee Id
                </th>
                <th>
                    Employee First Name
                </th>
                <th>
                    Employee Last Name
                </th>
                <th>
                    Employee EmailId
                </th>
                <th>
                   Actions
                </th>
                
            </thead>
            <tbody>
                {
                    employees.map(
                        employee =>
                        <tr key = {employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td><Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                            <button className='btn btn-danger' onClick={()=>deleteEmployee(employee.id)} style = {{marginLeft:"10px"}}>Delete</button>
                            </td>
                            

                        </tr>
                    )
                }
            </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
