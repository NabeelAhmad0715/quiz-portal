const express = require('express');

const router = express.Router();
const UserScheduleQuizController = require('../controllers/userScheduleQuiz.controller');

/* Schedule Quiz Router */
router.get('/', UserScheduleQuizController.index);
router.get('/:id/show', UserScheduleQuizController.show);
router.post('/create', UserScheduleQuizController.store);
router.put('/:id/update', UserScheduleQuizController.update);
router.delete('/:id/delete', UserScheduleQuizController.delete);
module.exports = router;

/**
 * @swagger
 * /api/schedule-quizzes/{schedule_quiz_id}/users/{user_id}/user-schedule-quizzes:
 *   get:
 *     summary: all user schedule quizzes
 *     tags: [User Schedule Quizzes]
 *     parameters:
 *       - name: schedule_quiz_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: user_id
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
 *               - user_id
 *             properties:
 *               schedule_quiz_id:
 *                 type: integer
 *               user_id:
 *                 type: integer
 *             example:
 *               schedule_quiz_id: 1
 *               user_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 UserScheduleQuiz:
 *                   $ref: '#/components/schemas/UserScheduleQuiz'
 *                 scheduleQuiz:
 *                   $ref: '#/components/schemas/scheduleQuiz'
 *                 User:
 *                   $ref: '#/components/schemas/User'
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
 * /api/schedule-quizzes/{schedule_quiz_id}/users/{user_id}/schedule-quizzes/{id}/show:
 *   get:
 *     summary: get user schedule Quiz by id
 *     tags: [User Schedule Quizzes]
 *     parameters:
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: schedule_quiz_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: user_id
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
 *               - user_id
 *             properties:
 *               id:
 *                 type: integer
 *               schedule_quiz_id:
 *                 type: integer
 *               user_id:
 *                 type: integer
 *             example:
 *               id: 1
 *               schedule_quiz_id: 1
 *               user_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 UserScheduleQuiz:
 *                   $ref: '#/components/schemas/UserScheduleQuiz'
 *                 scheduleQuiz:
 *                   $ref: '#/components/schemas/scheduleQuiz'
 *                 User:
 *                   $ref: '#/components/schemas/User'
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
 * /api/schedule-quizzes/{schedule_quiz_id}/users/{user_id}/user-schedule-quizzes/create:
 *   post:
 *     summary: add schedule Quiz
 *     tags: [User Schedule Quizzes]
 *     parameters:
 *       - name: schedule_quiz_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: user_id
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
 *               - user_id
 *             properties:
 *               schedule_quiz_id:
 *                 type: integer
 *               user_id:
 *                 type: integer
 *             example:
 *               schedule_quiz_id: 1
 *               user_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 UserScheduleQuiz:
 *                   $ref: '#/components/schemas/UserScheduleQuiz'
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
 * /api/schedule-quizzes/{schedule_quiz_id}/users/{user_id}/schedule-quizzes/{id}/update:
 *   put:
 *     summary: update user schedule Quiz by id
 *     tags: [User Schedule Quizzes]
 *     parameters:
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: schedule_quiz_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: user_id
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
 *               - user_id
 *             properties:
 *               schedule_quiz_id:
 *                 type: integer
 *               user_id:
 *                 type: integer
 *             example:
 *               schedule_quiz_id: 1
 *               user_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 UserScheduleQuiz:
 *                   $ref: '#/components/schemas/UserScheduleQuiz'
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
 * /api/schedule-quizzes/{schedule_quiz_id}/users/{user_id}/schedule-quizzes/{id}/delete:
 *   delete:
 *     summary: delete user schedule Quiz by id
 *     tags: [User Schedule Quizzes]
 *     parameters:
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: schedule_quiz_id
 *         in: path
 *         type: integer
 *       - name: user_id
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
 *               - user_id
 *             properties:
 *               id:
 *                 type: integer
 *               schedule_quiz_id:
 *                 type: integer
 *               user_id:
 *                 type: integer
 *             example:
 *               id: 1
 *               schedule_quiz_id: 1
 *               user_id: 1
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
