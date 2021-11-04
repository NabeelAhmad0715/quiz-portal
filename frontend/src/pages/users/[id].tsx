import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import Link from 'next/link';
import { server } from '../../../config/index';
import Router from 'next/router';
import { useState } from 'react';
async function sendUserData(userDetails) {
  try {
    await fetch(`${server}/api/users/${userDetails.id}/update`, {
      method: 'PUT',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    Router.push('/users');
  } catch (error) {
    Router.push('/404');
  }
}
const update = ({ user, roles }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [roleId, setRoleId] = useState(user.roles.id);
  async function sendMessageHandler(event) {
    event.preventDefault();
    try {
      await sendUserData({
        id: user.id,
        name: name,
        email: email,
        role_id: roleId,
      });
      setName('');
      setEmail('');
      setRoleId('');
    } catch (error) {
      console.log(error);
    }
  }
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
                  / update / <span className="text-primary">{user.name}</span>
                </p>
              </header>
              <CardBody>
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
                      <select
                        className="form-control mb-2"
                        onChange={(event) => setRoleId(event.target.value)}
                        value={roleId}
                      >
                        <option value="">Select Role</option>
                        {roles.map((role) => (
                          <option value={role.id}>{role.name}</option>
                        ))}
                      </select>
                    </Col>
                  </Row>
                  <button className="form-control btn btn-primary" type="submit">
                    Update
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
  const response = await fetch(`${server}/api/roles`);
  const roles = await response.json();

  return { props: { user, roles } };
}

export default update;
