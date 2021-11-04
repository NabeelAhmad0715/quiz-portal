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
    const response = await fetch(`${server}/api/question-banks/questions/${id}/delete`, {
      method: 'delete',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    Router.push('/questions');
  }
  return (
    <>
      <tr>
        <th scope="row">{record.id}</th>
        <td>{record.question_banks.name}</td>
        <td>{record.question}</td>
        <td>
          <span className="badge badge-primary">{record.marks} points</span>
        </td>
        <td>{record.createdAt}</td>
        <td className="text-right">
          <Link href={`/questions/${record.id}`}>
            <a className="btn btn-info mr-2"> Edit</a>
          </Link>
          <Link href="/questions">
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
