const express = require('express');

const router = express.Router();
const StudentScheduleQuizController = require('../controllers/studentScheduleQuiz.controller');

/* Schedule Quiz Router */
router.get('/', StudentScheduleQuizController.index);
router.get('/:id', StudentScheduleQuizController.show);
router.post('/', StudentScheduleQuizController.store);
router.put('/:id', StudentScheduleQuizController.update);
router.delete('/:id', StudentScheduleQuizController.delete);
module.exports = router;

/**
 * @swagger
 * /api/schedule-quizzes/{schedule_quiz_id}/students/{student_id}/student-schedule-quizzes:
 *   get:
 *     summary: all student schedule quizzes
 *     tags: [Student Schedule Quizzes]
 *     parameters:
 *       - name: schedule_quiz_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: student_id
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
 *               - schedule_quiz_id
 *               - student_id
 *             properties:
 *               schedule_quiz_id:
 *                 type: integer
 *               student_id:
 *                 type: integer
 *             example:
 *               schedule_quiz_id: 1
 *               student_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 StudentScheduleQuiz:
 *                   $ref: '#/components/schemas/StudentScheduleQuiz'
 *                 scheduleQuiz:
 *                   $ref: '#/components/schemas/scheduleQuiz'
 *                 Student:
 *                   $ref: '#/components/schemas/Student'
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
 * /api/schedule-quizzes/{schedule_quiz_id}/students/{student_id}/schedule-quizzes/{id}:
 *   get:
 *     summary: get student schedule Quiz by id
 *     tags: [Student Schedule Quizzes]
 *     parameters:
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: schedule_quiz_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: student_id
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
 *               - schedule_quiz_id
 *               - student_id
 *             properties:
 *               id:
 *                 type: integer
 *               schedule_quiz_id:
 *                 type: integer
 *               student_id:
 *                 type: integer
 *             example:
 *               id: 1
 *               schedule_quiz_id: 1
 *               student_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 StudentScheduleQuiz:
 *                   $ref: '#/components/schemas/StudentScheduleQuiz'
 *                 scheduleQuiz:
 *                   $ref: '#/components/schemas/scheduleQuiz'
 *                 Student:
 *                   $ref: '#/components/schemas/Student'
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
 * /api/schedule-quizzes/{schedule_quiz_id}/students/{student_id}/student-schedule-quizzes:
 *   post:
 *     summary: add schedule Quiz
 *     tags: [Student Schedule Quizzes]
 *     parameters:
 *       - name: schedule_quiz_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: student_id
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
 *               - schedule_quiz_id
 *               - student_id
 *             properties:
 *               schedule_quiz_id:
 *                 type: integer
 *               student_id:
 *                 type: integer
 *             example:
 *               schedule_quiz_id: 1
 *               student_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 StudentScheduleQuiz:
 *                   $ref: '#/components/schemas/StudentScheduleQuiz'
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
 * /api/schedule-quizzes/{schedule_quiz_id}/students/{student_id}/schedule-quizzes/{id}:
 *   put:
 *     summary: update student schedule Quiz by id
 *     tags: [Student Schedule Quizzes]
 *     parameters:
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: schedule_quiz_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: student_id
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
 *               - schedule_quiz_id
 *               - student_id
 *             properties:
 *               schedule_quiz_id:
 *                 type: integer
 *               student_id:
 *                 type: integer
 *             example:
 *               schedule_quiz_id: 1
 *               student_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 StudentScheduleQuiz:
 *                   $ref: '#/components/schemas/StudentScheduleQuiz'
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
 * /api/schedule-quizzes/{schedule_quiz_id}/students/{student_id}/schedule-quizzes/{id}:
 *   delete:
 *     summary: delete student schedule Quiz by id
 *     tags: [Student Schedule Quizzes]
 *     parameters:
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: schedule_quiz_id
 *         in: path
 *         type: integer
 *       - name: student_id
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
 *               - schedule_quiz_id
 *               - student_id
 *             properties:
 *               id:
 *                 type: integer
 *               schedule_quiz_id:
 *                 type: integer
 *               student_id:
 *                 type: integer
 *             example:
 *               id: 1
 *               schedule_quiz_id: 1
 *               student_id: 1
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
