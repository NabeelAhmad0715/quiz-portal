import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import Link from 'next/link';
import { server } from '../../../config/index';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import Flash from '../../components/Flash';
async function sendQuestionBankData(questionBankDetails) {
  try {
    const response = await fetch(`${server}/api/question-banks/create`, {
      method: 'POST',
      body: JSON.stringify(questionBankDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    Router.push('/question-banks/create');
  } catch (error) {
    console.log(error);
  }
}
const create = ({ roles }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  async function sendMessageHandler(event) {
    event.preventDefault();
    try {
      await sendQuestionBankData({
        name: name,
        type: type,
        user_id: 6,
      });
      setName('');
      setType('');
      setMessage('Question Bank created successfully!');
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
      <Layout auth="true" title="Input">
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
                  <Link href="/question-banks">
                    <a>Question Banks</a>
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
                      <select className="form-control mb-2" onChange={(event) => setType(event.target.value)}>
                          <option value="">Select Type</option>
                            <option value="php">Php</option>
                            <option value="laravel">Laravel</option>
                            <option value="react">React</option>
                            <option value="nodejs">NodeJS</option>
                            <option value="nextjs">NextJS</option>
                            <option value="database">Database</option>
                        </select>
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

export default create;
