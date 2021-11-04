import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import Link from 'next/link';
import { server } from '../../../config/index';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import Flash from '../../components/Flash';
async function sendUserData(userDetails) {
  try {
    const response = await fetch(`${server}/api/users/create`, {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);

    Router.push('/users/create');
  } catch (error) {
    console.log(error);
  }
}
const create = ({ roles }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [roleId, setRoleId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  async function sendMessageHandler(event) {
    event.preventDefault();
    try {
      await sendUserData({
        name: name,
        email: email,
        role_id: roleId,
        password: password,
      });
      setName('');
      setEmail('');
      setPassword('');
      setRoleId('');
      setMessage('User created successfully!');
      setStatus('success');
    } catch (error) {
      setMessage(error);
      setStatus('danger');
      console.log(error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setMessage('');
      setStatus('');
    }, 5000);
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
                  / create
                </p>
              </header>
              <CardBody>
                {message && <Flash message={message} status={status} />}
                <form onSubmit={sendMessageHandler}>
                  <Row>
                    <Col breakPoint={{ xs: 12, md: 6 }}>
                      <input
                        className="form-control mb-2"
                        type="text"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6 }}>
                      <input
                        className="form-control mb-2"
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6 }}>
                      <select className="form-control mb-2" onChange={(event) => setRoleId(event.target.value)}>
                        <option value="">Select Role</option>
                        {roles.map((role) => (
                          <option value={role.id}>{role.name}</option>
                        ))}
                      </select>
                    </Col>
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
                  </Row>
                  <button className="form-control btn btn-primary" type="submit">
                    Save
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

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/roles`);
  const roles = await res.json();

  return {
    props: {
      roles,
    },
  };
};

export default create;
