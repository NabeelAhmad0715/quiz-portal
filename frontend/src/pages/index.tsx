import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from 'Layouts';
import Container from '@paljs/ui/Container';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import { EvaIcon } from '@paljs/ui/Icon';
import Link from 'next/link';

const index = () => {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
      // router.push('/dashboard');
    setAuth(user ? true : false);

  }),[];
  return (
    <>
      <Layout auth={auth}>
        <Container>
          <Row>
          <Col breakPoint={{ xs: 12, md: 3 }} className="mb-3">
            <Link href="/roles">
              <a>
                <div className="bg-primary p-3">
                    <Col className="text-center mb-2">
                        <EvaIcon status="Success" className="text-white h1" name="lock-outline" options={{ animation: { type: "pulse" } }} />
                    </Col>
                    <h4 className="text-white text-center">Roles</h4>
                </div>
              </a>
            </Link>
          </Col>
          <Col breakPoint={{ xs: 12, md: 3 }} className="mb-3">
            <Link href="/users">
              <a>
                <div className="bg-primary p-3">
                    <Col className="text-center mb-2">
                        <EvaIcon status="Success" className="text-white h1" name="person-outline" options={{ animation: { type: "pulse" } }} />
                    </Col>
                  <h4 className="text-white text-center">Users</h4>
                </div>
              </a>
            </Link>
          </Col>
          <Col breakPoint={{ xs: 12, md: 3 }} className="mb-3">
            <Link href="/question-banks">
              <a>
                <div className="bg-primary p-3">
                    <Col className="text-center mb-2">
                        <EvaIcon status="Success" className="text-white h1" name="book-outline" options={{ animation: { type: "pulse" } }} />
                    </Col>
                  <h4 className="text-white text-center">Question Banks</h4>
                </div>
              </a>
            </Link>
          </Col>
          <Col breakPoint={{ xs: 12, md: 3 }} className="mb-3">
            <Link href="/questions">
              <a>
                <div className="bg-primary p-3">
                    <Col className="text-center mb-2">
                        <EvaIcon status="Success" className="text-white h1" name="copy-outline" options={{ animation: { type: "pulse" } }} />
                    </Col>
                  <h4 className="text-white text-center">Questions</h4>
                </div>
              </a>
            </Link>
          </Col>
          <Col breakPoint={{ xs: 12, md: 3 }} className="mb-3">
            <Link href="/">
              <a>
                <div className="bg-primary p-3">
                    <Col className="text-center mb-2">
                        <EvaIcon status="Success" className="text-white h1" name="clock-outline" options={{ animation: { type: "pulse" } }} />
                    </Col>
                  <h4 className="text-white text-center">Schedule Quizzes</h4>
                </div>
              </a>
            </Link>
          </Col>
          <Col breakPoint={{ xs: 12, md: 3 }} className="mb-3">
            <Link href="/">
              <a>
                <div className="bg-primary p-3">
                    <Col className="text-center mb-2">
                        <EvaIcon status="Success" className="text-white h1" name="file-outline" options={{ animation: { type: "pulse" } }} />
                    </Col>
                  <h4 className="text-white text-center">User Quiz Attempts</h4>
                </div>
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
      </Layout>
    </>
  );
};
export default index;
