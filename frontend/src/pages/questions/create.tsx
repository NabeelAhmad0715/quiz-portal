import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import Link from 'next/link';
import { server } from '../../../config/index';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import Flash from '../../components/Flash';
import ReactTagInput from "next-js-suggest-input";
import "next-js-suggest-input/build/react-tag-input.css"
import { Checkbox } from '@paljs/ui/Checkbox';


async function sendQuestionData(questionDetails) {
  console.log(questionDetails);

  try {
    const response = await fetch(`${server}/api/question-banks/questions/create`, {
      method: 'POST',
      body: JSON.stringify(questionDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    Router.push('/questions/create');
  } catch (error) {
    console.log(error);
  }
}
const create = ({ questionBanks, suggestions }) => {
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [marks, setMarks] = useState('');
  const [questionBankId, setQuestionBankId] = useState('');
  const [tags, setTags] = useState([]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [options, setOptions] = useState([{ option: "", is_correct: false }]);

  async function sendMessageHandler(event) {
    event.preventDefault();
    try {
      await sendQuestionData({
        question: question,
        description: description,
        tags: tags,
        marks: marks,
        question_bank_id: questionBankId,
        options:options
      });
      setQuestion('');
      setDescription('');
      setMarks('');
      setTags([]);
      setQuestionBankId('');
      setOptions([{ option: "", is_correct: false }]);
      setMessage('Question created successfully!');
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

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    console.log(name, value);
    const list = [...options];
    list[index][name] = value;
    setOptions(list);
  };

  const handleRemoveClick = index => {
    const list = [...options];
    list.splice(index, 1);
    setOptions(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setOptions([...options, { option: "", is_correct: false }]);
  };

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
                  <Link href="/questions">
                    <a>Questions</a>
                  </Link>{' '}
                  / create
                </p>
              </header>
              <CardBody>
                {message && <Flash message={message} status={status} />}
                <form onSubmit={sendMessageHandler}>
                  <Row>
                    <Col breakPoint={{ xs: 12, md: 12 }}>
                      <textarea
                        className="form-control mb-2"
                        placeholder="Question"
                        required
                        value={question}
                        onChange={(event) => setQuestion(event.target.value)}
                      ></textarea>
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6 }}>
                      <select className="form-control mb-2" onChange={(event) => setQuestionBankId(event.target.value)}>
                          <option value="">Select Question Bank</option>
                          {questionBanks.map((questionBank) => (
                            <option value={questionBank.id}>{questionBank.name}</option>
                          ))}
                        </select>
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 6 }}>
                      <input
                        className="form-control mb-2"
                        type="text"
                        placeholder="Marks"
                        required
                        value={marks}
                        onChange={(event) => setMarks(event.target.value)}
                      />
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 12 }}>
                      <textarea
                        className="form-control mb-2"
                        placeholder="Description"
                        required
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                      ></textarea>
                    </Col>
                    <Col breakPoint={{ xs: 12, md: 12 }}>
                      <ReactTagInput
                          tags={tags}
                          placeholder="Add Tags"
                          maxTags={1000}
                          editable={false}
                          readOnly={false}
                          removeOnBackspace={true}
                          suggestions={suggestions}
                          onChange={(newTags) => setTags(newTags)}
                      />
                    </Col>

                    <Col breakPoint={{ xs: 12, md:12}}>
                    <fieldset className="p-3 w-100 border mb-3 mt-3">
                        <legend>Options</legend>
                    {options.map((option, i) => {
                    return (

                      <Row>
                        <Col breakPoint={{ xs: 12, md:5}}>
                        <input
                          type="text"
                          name="option"
                          className="form-control mb-2"
                          placeholder="Option"
                          value={option.option}
                          onChange={e => handleInputChange(e, i)}
                        />
                        </Col>
                        <Col breakPoint={{ xs: 12, md:2}}>
                        <div className="form-check">
                          <select className="form-control" name="is_correct" onChange={e => handleInputChange(e, i)}>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                          </select>
                          </div>
                        </Col>
                        <Col className="text-right" breakPoint={{ xs: 12, md:5}}>
                          {options.length !== 1 && <button
                            className="w-25 form-control btn btn-danger mr-3"
                            onClick={() => handleRemoveClick(i)}>Remove</button>}
                          {options.length - 1 === i &&
                          <button className="w-25 form-control btn btn-primary mr-3" onClick={handleAddClick}>Add</button>}
                        </Col>
                      </Row>
                    );
                  })}
                  </fieldset>
                    </Col>
                    <Col className="text-center" breakPoint={{ xs: 12, md: 12 }}>
                    <button className="w-25 btn btn-primary" type="submit">
                      Save
                    </button>
                    </Col>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
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
  const suggestions = [];
  const questionBanks = await res.json();
  questionBanks.forEach((questionBank) => {
    suggestions.push(questionBank.type);
  })
  return {
    props: {
      questionBanks,
      suggestions
    },
  };
};

export default create;
