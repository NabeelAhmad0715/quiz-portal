const express = require('express');

const router = express.Router();
const StudentQuizAttemptResponseController = require('../controllers/studentQuizAttemptResponse.controller');

/* Student Quiz Attempts Router */
router.get('/', StudentQuizAttemptResponseController.index);
router.get('/:id', StudentQuizAttemptResponseController.show);
router.post('/', StudentQuizAttemptResponseController.store);
router.put('/:id', StudentQuizAttemptResponseController.update);
router.delete('/:id', StudentQuizAttemptResponseController.delete);
module.exports = router;

/**
 * @swagger
 * /api/student-quiz-attempts/{studentQuiz_attempt_id}/student-quiz-attempt-responses:
 *   get:
 *     summary: all student quiz attempt responses
 *     tags: [Student Quiz Attempt Responses]
 *     parameters:
 *       - name: student_quiz_attempt_id
 *         in: path
 *         type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - student_quiz_attempt_id
 *             properties:
 *               student_quiz_attempt_id:
 *                 type: integer
 *             example:
 *               student_quiz_attempt_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 StudentQuizAttemptResponse:
 *                   $ref: '#/components/schemas/StudentQuizAttemptResponse'
 *                 StudentQuizAttempt:
 *                   $ref: '#/components/schemas/StudentQuizAttempt'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: Not Found
 */

/**
 * @swagger
 * /api/student-quiz-attempts/{studentQuiz_attempt_id}/student-quiz-attempt-responses/{id}:
 *   get:
 *     summary: get student quiz attempt responses by id
 *     tags: [Student Quiz Attempt Responses]
 *     parameters:
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: student_quiz_attempt_id
 *         in: path
 *         type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - student_quiz_attempt_id
 *             properties:
 *               id:
 *                 type: integer
 *               student_quiz_attempt_id:
 *                 type: integer
 *             example:
 *               id: 1
 *               student_quiz_attempt_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 StudentQuizAttemptResponse:
 *                   $ref: '#/components/schemas/StudentQuizAttemptResponse'
 *                 StudentQuizAttempt:
 *                   $ref: '#/components/schemas/StudentQuizAttempt'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: Not Found
 */

/**
 * @swagger
 * /api/student-quiz-attempts/{studentQuiz_attempt_id}/student-quiz-attempt-responses:
 *   post:
 *     summary: add student quiz attempt responses
 *     tags: [Student Quiz Attempt Responses]
 *     parameters:
 *       - name: student_quiz_attempt_id
 *         in: path
 *         type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - student_quiz_attempt_id
 *               - question_id
 *               - obtained_marks
 *               - is_correct
 *               - option_id
 *             properties:
 *               student_quiz_attempt_id:
 *                 type: integer
 *               question_id:
 *                 type: integer
 *               obtained_marks:
 *                 type: integer
 *               is_correct:
 *                 type: boolean
 *               option_id:
 *                 type: integer
 *             example:
 *               student_quiz_attempt_id: 1
 *               question_id: 1
 *               obtained_marks: 20
 *               is_correct: false
 *               option_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 StudentQuizAttemptResponse:
 *                   $ref: '#/components/schemas/StudentQuizAttemptResponse'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: Not Found
 */

/**
 * @swagger
 * /api/student-quiz-attempts/{studentQuiz_attempt_id}/student-quiz-attempt-responses/{id}:
 *   put:
 *     summary: update student quiz attempt responses by id
 *     tags: [Student Quiz Attempt Responses]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *       - in: query
 *         name: student_quiz_attempt_id
 *         required: true
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - student_quiz_attempt_id
 *               - question_id
 *               - obtained_marks
 *               - is_correct
 *               - option_id
 *             properties:
 *               student_quiz_attempt_id:
 *                 type: integer
 *               question_id:
 *                 type: integer
 *               obtained_marks:
 *                 type: integer
 *               is_correct:
 *                 type: boolean
 *               option_id:
 *                 type: integer
 *             example:
 *               student_quiz_attempt_id: 1
 *               question_id: 1
 *               obtained_marks: 20
 *               is_correct: false
 *               option_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 StudentQuizAttemptResponse:
 *                   $ref: '#/components/schemas/StudentQuizAttemptResponse'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: student quiz attempts Not Found
 */

/**
 * @swagger
 * /api/student-quiz-attempts/{studentQuiz_attempt_id}/student-quiz-attempt-responses/{id}:
 *   delete:
 *     summary: delete student quiz attempt responses by id
 *     tags: [Student Quiz Attempt Responses]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *       - in: query
 *         name: student_quiz_attempt_id
 *         required: true
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - student_quiz_attempt_id
 *             properties:
 *               id:
 *                 type: integer
 *               student_quiz_attempt_id:
 *                 type: integer
 *             example:
 *               id: 1
 *               student_quiz_attempt_id: 1
 *     responses:
 *       "204":
 *         description: OK
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: student quiz attempts Not Found
 */
