import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import Link from 'next/link';
import Table from '../../components/UserList';
import { server } from '../../../config/index';

const index = ({users}) => {
    return(
        <>
        <Layout title="Input">
            <Row>
                <Col breakPoint={{ xs: 12, md: 12 }}>
                    <Card>
                        <header>Users
                            <p><Link href="/"><a>Dashboard</a></Link> / <Link href="/users"><a>Users</a></Link> / view</p>
                            <Link href="/users/create"><button className="btn btn-primary">Add A New User</button></Link>
                        </header>
                        <CardBody>
                            <Table users={users}/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Layout>
        </>
    );
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/users`)
    const users = await res.json();

    return {
      props: {
        users,
      }
    }
  }
export default index;