import Link from 'next/link';
import Role from './Role';
export default function index({roles}){
    return(
        <>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Created At</th>
                <th className="text-right">Action</th>
                </tr>
            </thead>
            <tbody>
                {roles.map((role) => (
                    <Role role={role} />
                ))}

            </tbody>
        </table>
        </>
    );
}