import React from 'react';
import {Link} from 'react-router-dom';

const Todos = (props)=> {
    const { users } = props;

    return(
        <>
            <div>
                <center><h1>Title Information</h1></center>
                <table className="table" >
                    <thead>
                        <tr>
                            <th scope="col">UserId</th>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Completed</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(item => 
                                <tr key={item?.id}>
                                <td>{item?.userId}</td>
                                <td>{item?.id}</td>
                                <td>{item?.title}</td>
                                <td>{item?.completed.toString()}</td>                        
                                <td><Link to={`/edit/${item?.id}`}>Edit Details </Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </>
    );
}
export default Todos;