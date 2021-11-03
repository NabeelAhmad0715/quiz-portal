import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import Link from 'next/link';
import { server } from '../../../../config/index';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import Flash from '../../../components/Flash';
async function sendUserData(userDetails) {
  try {
    return await fetch(`${server}/api/users/${userDetails.id}/change-password`, {
      method: 'PUT',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return error;
  }
}
const update = ({ user }) => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  async function sendMessageHandler(event) {
    event.preventDefault();
    try {
      const response = await sendUserData({
        id: user.id,
        password: password,
        newPassword: newPassword,
      });

      const result = await response.json();
      if (response.status == 200) {
        setPassword('');
        setNewPassword('');
        setMessage('Password changed successfully');
        setStatus('success');
      } else {
        setMessage(result.message);
        setStatus('danger');
      }
      Router.push(`/users/change-password/${user.id}`);
    } catch (error) {
      setMessage('Please provide the correct credentials');
      setStatus('danger');
      Router.push(`/users/change-password/${user.id}`);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setMessage('');
      setStatus('');
    }, 3000);
  }, []);

  return (
    <>
      <Layout title="Input">
        <Row>
          <Col breakPoint={{ xs: 12, md: 12 }}>
            <Card>
              <header>
                Users
                <p>
                  <Link href="/">
                    <a>Dashboard</a>
                  </Link>{' '}
                  /{' '}
                  <Link href="/users">
                    <a>Users</a>
                  </Link>{' '}
                  / Change Password / <span className="text-primary">{user.name}</span>
                </p>
              </header>
              <CardBody>
                {message && <Flash message={message} status={status} />}
                <form onSubmit={sendMessageHandler}>
                  <Row>
                    <Col breakPoint={{ xs: 12, md: 6 }}>
                      <input
                        className="form-control mb-2"
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6 }}>
                      <input
                        className="form-control mb-2"
                        type="password"
                        placeholder="New Password"
                        required
                        value={newPassword}
                        onChange={(event) => setNewPassword(event.target.value)}
                      />
                    </Col>
                  </Row>
                  <button className="form-control btn btn-primary" type="submit">
                    Change
                  </button>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${server}/api/users`);
  const users = await res.json();
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${server}/api/users/${params.id}/show`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const user = await res.json();
  return { props: { user } };
}

export default update;
