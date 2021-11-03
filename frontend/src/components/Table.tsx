import Link from 'next/link';
import { useState } from 'react';
import QuestionBank from './QuestionBank';
import Role from './Role';
import User from './User';
import Question from './Question';

const index = ({ fileName, headings, records }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {headings.map((heading) => (
                <th className={heading == 'Action' ? 'text-right' : ''} scope="col">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {fileName == 'QuestionBank' && records.map((record) => (
                <QuestionBank record={record} />
            ))}
            {fileName == 'Role' && records.map((record) => (
                <Role record={record} />
            ))}
            {fileName == 'User' && records.map((record) => (
                <User record={record} />
            ))}
            {fileName == 'Question' && records.map((record) => (
                <Question record={record} />
            ))}
        </tbody>
      </table>
    </>
  );
}
export default index;