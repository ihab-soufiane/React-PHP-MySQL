import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8080/api/user/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div>
            <h1>Create user</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>firstName: </label>
                            </th>
                            <td>
                                <input type="text" name="firstName" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>lastName: </label>
                            </th>
                            <td> 
                                <input type="text" name="lastName" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>address: </label>
                            </th>
                            <td>
                                <input type="text" name="address" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>country: </label>
                            </th>
                            <td>
                                <input type="text" name="country" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>phoneNumber: </label>
                            </th>
                            <td>
                                <input type="text" name="phoneNumber" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>picture: </label>
                            </th>
                            <td>
                                <input type="file" name="picture" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
