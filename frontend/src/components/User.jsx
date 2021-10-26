import Link from 'next/link'
import { server } from '../../config/index';
import Router from 'next/router';
export default function index({user}){
    async function deleteHandle(event){
        event.preventDefault();
        const id = event.target.id;
        const body = {
            id: id
        }
        const response = await fetch(`${server}/api/users/${id}/delete`, {
            method: 'delete',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          Router.push('/users');
    }
    return(
        <>
        <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><span className="badge badge-primary">{user.roles.name}</span></td>
            <td>{user.createdAt}</td>
            <td className="text-right">
                <Link href={`/users/${user.id}`}><a className="btn btn-info mr-2"> Edit</a></Link>
                <Link href={`/users/change-password/${user.id}`}><a className="btn btn-warning mr-2"> Change Password</a></Link>
                <Link href='/users'><a className="btn btn-danger" id={user.id} onClick={(event) =>
                    window.confirm('Are you sure you want to delete this record?') ? deleteHandle(event) : ''}>Delete</a></Link>
            </td>
        </tr>
        </>
    );
}