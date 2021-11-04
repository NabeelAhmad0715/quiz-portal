import Link from 'next/link';
import { server } from '../../config/index';
import Router from 'next/router';
export default function index({ record }) {
  async function deleteHandle(event) {
    event.preventDefault();
    const id = event.target.id;
    const body = {
      id: id,
    };
    const response = await fetch(`${server}/api/question-banks/${id}/delete`, {
      method: 'delete',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    Router.push('/question-banks');
  }
  return (
    <>
      <tr>
        <th scope="row">{record.id}</th>
        <td>{record.name}</td>
        <td>{record.users.name}</td>
        <td>
          <span className="badge badge-primary">{record.type}</span>
        </td>
        <td>{record.createdAt}</td>
        <td className="text-right">
          <Link href={`/question-banks/${record.id}`}>
            <a className="btn btn-info mr-2"> Edit</a>
          </Link>
          <Link href="/question-banks">
            <a
              className="btn btn-danger"
              id={record.id}
              onClick={(event) =>
                window.confirm('Are you sure you want to delete this record?') ? deleteHandle(event) : ''
              }
            >
              Delete
            </a>
          </Link>
        </td>
      </tr>
    </>
  );
}
