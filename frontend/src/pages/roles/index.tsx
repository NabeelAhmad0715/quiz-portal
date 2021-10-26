import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import Link from 'next/link';
import Table from '../../components/RoleList';
import { server } from '../../../config/index';

const index = ({roles}) => {
    return(
        <>
        <Layout title="Input">
            <Row>
                <Col breakPoint={{ xs: 12, md: 12 }}>
                    <Card>
                        <header>Roles
                            <p><Link href="/"><a>Dashboard</a></Link> / <Link href="/roles"><a>Roles</a></Link> / view</p>
                            <Link href="/roles/create"><button className="btn btn-primary">Add A New Role</button></Link>
                        </header>
                        <CardBody>
                            <Table roles={roles}/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Layout>
        </>
    );
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/roles`)
    const roles = await res.json();

    return {
      props: {
        roles,
      }
    }
  }
export default index;