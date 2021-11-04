import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import Link from 'next/link';
import Table from '../../components/Table';
import { server } from '../../../config/index';

const index = ({ records, headings }) => {
  return (
    <>
      <Layout title="Input">
        <Row>
          <Col breakPoint={{ xs: 12, md: 12 }}>
            <Card>
              <header>
                Questions
                <p>
                  <Link href="/">
                    <a>Dashboard</a>
                  </Link>{' '}
                  /{' '}

                    Questions{' '}
                  / view
                </p>
                <Link href="/questions/create">
                  <button className="btn btn-primary">Add A New Question</button>
                </Link>
              </header>
              <CardBody>
                <Table fileName="Question" headings={headings} records={records} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/question-banks/questions`, {
    body: JSON.stringify({
      question_bank_id: 2,
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJyb2xlX2lkIjo3LCJlbWFpbCI6ImZ1cnFhbi5heml6QGludm96b25lLmNvbSIsImlhdCI6MTYzNTc1MTI2NiwiZXhwIjoxNjM1NzUxMzI2fQ.YWjJFFedq1N8XD6Mw2dQvJ0_UNVnuPPB3MH2dgO4ZUw',
    },
  });
  const records = await res.json();
  const headings = ['#', 'Question Bank', 'Question', 'Marks', 'Created At', 'Action'];
  return {
    props: {
      records,
      headings
    },
  };
};
export default index;
