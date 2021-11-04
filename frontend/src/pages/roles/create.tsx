import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import Link from 'next/link';
import { server } from '../../../config/index';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import Flash from '../../components/Flash';
async function sendRoleData(roleDetails) {
  try {
    const response = await fetch(`${server}/api/roles/create`, {
      method: 'POST',
      body: JSON.stringify(roleDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    Router.push('/roles/create');
  } catch (error) {
    console.log(error);
  }
}
const create = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  async function sendMessageHandler(event) {
    event.preventDefault();
    try {
      await sendRoleData({
        name: name,
      });
      setName('');
      setMessage('Role Created successfully!');
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setMessage('');
    }, 5000);
  }, []);
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
                  / create
                </p>
              </header>
              <CardBody>
                {message && <Flash message={message} status="success" />}
                <form onSubmit={sendMessageHandler}>
                  <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
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
export default create;
