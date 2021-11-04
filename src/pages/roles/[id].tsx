import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import Link from 'next/link';
import { server } from '../../../config/index';
import Router from 'next/router';
import { useState, useEffect } from 'react';
async function sendRoleData(roleDetails) {
  try {
    const response = await fetch(`${server}/api/roles/${roleDetails.id}/update`, {
      method: 'PUT',
      body: JSON.stringify(roleDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    Router.push('/roles');
  } catch (error) {
    Router.push('/404');
  }
}
const update = ({ role }) => {
  const [name, setName] = useState(role.name);
  async function sendMessageHandler(event) {
    event.preventDefault();
    try {
      await sendRoleData({
        name: name,
        id: role.id,
      });
      setName('');
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
                Roles
                <p>
                  <Link href="/">
                    <a>Dashboard</a>
                  </Link>{' '}
                  /{' '}
                  <Link href="/roles">
                    <a>Roles</a>
                  </Link>{' '}
                  / update / <span className="text-primary">{role.name}</span>
                </p>
              </header>
              <CardBody>
                <form onSubmit={sendMessageHandler}>
                  <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
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
  const res = await fetch(`${server}/api/roles`);
  const roles = await res.json();
  const paths = roles.map((role) => ({
    params: { id: role.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const body = {
    id: params.id,
  };
  const res = await fetch(`${server}/api/roles/${params.id}/show`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const role = await res.json();
  return { props: { role } };
}

export default update;
