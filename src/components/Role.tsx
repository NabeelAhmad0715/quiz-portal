import Link from 'next/link'
import { server } from '../../config/index';
import Router from 'next/router';
export default function index({role}){
    async function deleteHandle(event){
        event.preventDefault();
        const id = event.target.id;
        const body = {
            id: id
        }
        const response = await fetch(`${server}/api/roles/${id}/delete`, {
            method: 'delete',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          Router.push('/roles');
    }
    return(
        <>
        <tr>
            <th scope="row">{role.id}</th>
            <td>{role.name}</td>
            <td>{role.createdAt}</td>
            <td className="text-right">
                <Link href={`/roles/${role.id}`}><a className="btn btn-info mr-2"> Edit</a></Link>
                <Link href='/roles'><a className="btn btn-danger" id={role.id} onClick={(event) =>
                    window.confirm('Are you sure you want to delete this record?') ? deleteHandle(event) : ''}>Delete</a></Link>
            </td>
        </tr>
        </>
    );
}