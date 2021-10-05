const express = require('express');

const router = express.Router();
const ScheduleQuizController = require('../controllers').scheduleQuiz;

/* Schedule Quiz Router */
router.get('/', ScheduleQuizController.index);
router.get('/:id', ScheduleQuizController.show);
router.post('/', ScheduleQuizController.store);
router.put('/:id', ScheduleQuizController.update);
router.delete('/:id', ScheduleQuizController.delete);
module.exports = router;

/**
 * @swagger
 * /api/teachers/{teacher_id}/question-banks/{question_bank_id}/schedule-quizzes:
 *   get:
 *     summary: all schedule Quizzes
 *     tags: [Schedule Quizzes]
 *     parameters:
 *       - name: teacher_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: question_bank_id
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
 *               - teacher_id
 *               - question_bank_id
 *             properties:
 *               teacher_id:
 *                 type: integer
 *               question_bank_id:
 *                 type: integer
 *             example:
 *               teacher_id: 1
 *               question_bank_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 scheduleQuiz:
 *                   $ref: '#/components/schemas/scheduleQuiz'
 *                 questionBank:
 *                   $ref: '#/components/schemas/QuestionBank'
 *                 teacher:
 *                   $ref: '#/components/schemas/Teacher'
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
 * /api/teachers/{teacher_id}/question-banks/{question_bank_id}/schedule-quizzes/{id}:
 *   get:
 *     summary: get schedule Quiz by id
 *     tags: [Schedule Quizzes]
 *     parameters:
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: teacher_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: question_bank_id
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
 *               - teacher_id
 *               - question_bank_id
 *             properties:
 *               id:
 *                 type: integer
 *               teacher_id:
 *                 type: integer
 *               question_bank_id:
 *                 type: integer
 *             example:
 *               id: 1
 *               teacher_id: 1
 *               question_bank_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 scheduleQuiz:
 *                   $ref: '#/components/schemas/scheduleQuiz'
 *                 questionBank:
 *                   $ref: '#/components/schemas/QuestionBank'
 *                 teacher:
 *                   $ref: '#/components/schemas/Teacher'
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
 * /api/teachers/{teacher_id}/question-banks/{question_bank_id}/schedule-quizzes:
 *   post:
 *     summary: add schedule Quiz
 *     tags: [Schedule Quizzes]
 *     parameters:
 *       - name: teacher_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: question_bank_id
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
 *               - teacher_id
 *               - question_bank_id
 *               - start_dateTime
 *               - end_dateTime
 *             properties:
 *               teacher_id:
 *                 type: integer
 *               question_bank_id:
 *                 type: integer
 *               start_dateTime:
 *                 type: timestamp
 *               end_dateTime:
 *                 type: timestamp
 *             example:
 *               teacher_id: 1
 *               question_bank_id: 1
 *               start_dateTime: '2021-10-06 01:32:45'
 *               end_dateTime: '2021-10-06 02:32:45'
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ScheduleQuiz:
 *                   $ref: '#/components/schemas/ScheduleQuiz'
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
 * /api/teachers/{teacher_id}/question-banks/{question_bank_id}/schedule-quizzes/{id}:
 *   put:
 *     summary: update schedule Quiz by id
 *     tags: [Schedule Quizzes]
 *     parameters:
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: teacher_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: question_bank_id
 *         in: path
 *         type: integer
 *         required: true
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - teacher_id
 *               - question_bank_id
 *               - start_dateTime
 *               - end_dateTime
 *             properties:
 *               teacher_id:
 *                 type: integer
 *               question_bank_id:
 *                 type: integer
 *               start_dateTime:
 *                 type: timestamp
 *               end_dateTime:
 *                 type: timestamp
 *             example:
 *               teacher_id: 1
 *               question_bank_id: 1
 *               start_dateTime: '2021-10-06 01:32:45'
 *               end_dateTime: '2021-10-06 02:32:45'
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ScheduleQuiz:
 *                   $ref: '#/components/schemas/ScheduleQuiz'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: Question Not Found
 */

/**
 * @swagger
 * /api/teachers/{teacher_id}/question-banks/{question_bank_id}/schedule-quizzes/{id}:
 *   delete:
 *     summary: delete schedule Quiz by id
 *     tags: [Schedule Quizzes]
 *     parameters:
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: teacher_id
 *         in: path
 *         type: integer
 *       - name: question_bank_id
 *         in: path
 *         type: integer
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - teacher_id
 *               - question_bank_id
 *             properties:
 *               id:
 *                 type: integer
 *               teacher_id:
 *                 type: integer
 *               question_bank_id:
 *                 type: integer
 *             example:
 *               id: 1
 *               teacher_id: 1
 *               question_bank_id: 1
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
 *               message: schedule Quiz Not Found
 */
