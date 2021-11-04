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
                Users
                <p>
                  <Link href="/">
                    <a>Dashboard</a>
                  </Link>{' '}
                  /{' '}
                  <Link href="/users">
                    <a>Users</a>
                  </Link>{' '}
                  / view
                </p>
                <Link href="/users/create">
                  <button className="btn btn-primary">Add A New User</button>
                </Link>
              </header>
              <CardBody>
                <Table fileName="User" headings={headings} records={records} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/users`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJyb2xlX2lkIjo3LCJlbWFpbCI6ImZ1cnFhbi5heml6QGludm96b25lLmNvbSIsImlhdCI6MTYzNTIzNzE4MiwiZXhwIjoxNjM1ODQxOTgyfQ.PwagW-RPvgCQELXWrBMJgaowRdWDddgOoTXxJD2aFtM',
    },
  });
  const records = await res.json();
  const headings = ['#', 'Name', 'Email', 'Role', 'Created At', 'Action'];
  return {
    props: {
      records,
      headings
    },
  };
};
export default index;
