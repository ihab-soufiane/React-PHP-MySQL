import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost:8080/api/user/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:8080/api/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div>
            <h1>Edit user</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10" className="c">
                    <tbody>
                        <tr>
                            <th>
                                <label>firstName: </label>
                            </th>
                            <td>
                                <input value={inputs.firstName} type="text" name="firstName" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>lastName: </label>
                            </th>
                            <td> 
                                <input value={inputs.lastName} type="text" name="lastName" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>address: </label>
                            </th>
                            <td>
                                <input value={inputs.address} type="text" name="address" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>country: </label>
                            </th>
                            <td>
                                <input value={inputs.country} type="text" name="country" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>phoneNumber: </label>
                            </th>
                            <td>
                                <input value={inputs.phoneNumber} type="text" name="phoneNumber" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>picture: </label>
                            </th>
                            <td>
                                <input value={inputs.picture} type="text" name="picture" onChange={handleChange} />
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
