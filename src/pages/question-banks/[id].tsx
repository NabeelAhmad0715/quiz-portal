import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import Link from 'next/link';
import { server } from '../../../config/index';
import Router from 'next/router';
import { useState } from 'react';
async function sendQuestionBankData(questionBankDetails) {
  try {
    await fetch(`${server}/api/question-banks/${questionBankDetails.id}/update`, {
      method: 'PUT',
      body: JSON.stringify(questionBankDetails),
      headers: {
        'Content-Type': 'application/json',
        Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJyb2xlX2lkIjo3LCJlbWFpbCI6ImZ1cnFhbi5heml6QGludm96b25lLmNvbSIsImlhdCI6MTYzNTc1MTI2NiwiZXhwIjoxNjM1NzUxMzI2fQ.YWjJFFedq1N8XD6Mw2dQvJ0_UNVnuPPB3MH2dgO4ZUw',
      },
    });
    Router.push('/question-banks');
  } catch (error) {
    Router.push('/404');
  }
}
const update = ({ questionBank }) => {
  const [name, setName] = useState(questionBank.name);
  const [type, setType] = useState(questionBank.type);
  async function sendMessageHandler(event) {
    event.preventDefault();
    try {
      await sendQuestionBankData({
        id: questionBank.id,
        name: name,
        type: type,
        user_id: 6,
      });
      setName('');
      setType('');
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
                  <Link href="/question-banks">
                    <a>Question Banks</a>
                  </Link>{' '}
                  / update / <span className="text-primary">{questionBank.name}</span>
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
                        <select className="form-control mb-2" onChange={(event) => setType(event.target.value)} value={type}>
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
  const res = await fetch(`${server}/api/question-banks`, {
    body: JSON.stringify({
      user_id: 6,
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJyb2xlX2lkIjo3LCJlbWFpbCI6ImZ1cnFhbi5heml6QGludm96b25lLmNvbSIsImlhdCI6MTYzNTc1MTI2NiwiZXhwIjoxNjM1NzUxMzI2fQ.YWjJFFedq1N8XD6Mw2dQvJ0_UNVnuPPB3MH2dgO4ZUw',
    },
  });
  const questionBanks = await res.json();
  const paths = questionBanks.map((questionBank) => ({
    params: { id: questionBank.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${server}/api/question-banks/${params.id}/show`, {
    method: 'POST',
    body: JSON.stringify({
      user_id: 6,
      id: params.id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJyb2xlX2lkIjo3LCJlbWFpbCI6ImZ1cnFhbi5heml6QGludm96b25lLmNvbSIsImlhdCI6MTYzNTc1MTI2NiwiZXhwIjoxNjM1NzUxMzI2fQ.YWjJFFedq1N8XD6Mw2dQvJ0_UNVnuPPB3MH2dgO4ZUw',
  });
  const questionBank = await res.json();
  return { props: { questionBank } };
}

export default update;
