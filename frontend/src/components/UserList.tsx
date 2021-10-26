import Link from 'next/link';
import User from './User';
export default function index({users}){
    return(
        <>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Created At</th>
                <th className="text-right">Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <User user={user} />
                ))}
            </tbody>
        </table>
        </>
    );
}