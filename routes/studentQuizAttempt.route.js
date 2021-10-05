const express = require('express');

const router = express.Router();
const StudentQuizAttemptController = require('../controllers/studentQuizAttempt.controller');

/* Student Quiz Attempts Router */
router.get('/', StudentQuizAttemptController.index);
router.get('/:id', StudentQuizAttemptController.show);
router.post('/', StudentQuizAttemptController.store);
router.put('/:id', StudentQuizAttemptController.update);
router.delete('/:id', StudentQuizAttemptController.delete);
module.exports = router;

/**
 * @swagger
 * /api/students/{student_id}/student-quiz-attempts:
 *   get:
 *     summary: all student quiz attempts
 *     tags: [Student Quiz Attempts]
 *     parameters:
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
 *               - student_id
 *             properties:
 *               student_id:
 *                 type: integer
 *             example:
 *               student_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 StudentQuizAttempt:
 *                   $ref: '#/components/schemas/StudentQuizAttempt'
 *                 Student:
 *                   $ref: '#/components/schemas/Student'
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
 * /api/students/{student_id}/student-quiz-attempts/{id}:
 *   get:
 *     summary: get student quiz attempt by id
 *     tags: [Student Quiz Attempts]
 *     parameters:
 *       - name: id
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
 *               - student_id
 *             properties:
 *               id:
 *                 type: integer
 *               student_id:
 *                 type: integer
 *             example:
 *               id: 1
 *               student_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 StudentQuizAttempt:
 *                   $ref: '#/components/schemas/StudentQuizAttempt'
 *                 Student:
 *                   $ref: '#/components/schemas/Student'
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
 * /api/students/{student_id}/student-quiz-attempts:
 *   post:
 *     summary: add student quiz attempt
 *     tags: [Student Quiz Attempts]
 *     parameters:
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
 *               - student_id
 *               - quiz_id
 *               - obtained_marks
 *               - has_passed
 *               - is_finished
 *             properties:
 *               student_id:
 *                 type: integer
 *               quiz_id:
 *                 type: integer
 *               obtained_marks:
 *                 type: integer
 *               has_passed:
 *                 type: boolean
 *               is_finished:
 *                 type: boolean
 *             example:
 *               student_id: 1
 *               quiz_id: 1
 *               obtained_marks: 20
 *               has_passed: false
 *               is_finished: true
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
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
 * /api/students/{student_id}/student-quiz-attempts/{id}:
 *   put:
 *     summary: update student quiz attempts by id
 *     tags: [Student Quiz Attempts]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *       - in: query
 *         name: student_id
 *         required: true
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - student_id
 *               - quiz_id
 *               - obtained_marks
 *               - has_passed
 *               - is_finished
 *             properties:
 *               student_id:
 *                 type: integer
 *               quiz_id:
 *                 type: integer
 *               obtained_marks:
 *                 type: integer
 *               has_passed:
 *                 type: boolean
 *               is_finished:
 *                 type: boolean
 *             example:
 *               student_id: 1
 *               quiz_id: 1
 *               obtained_marks: 20
 *               has_passed: false
 *               is_finished: true
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
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
 *               message: student quiz attempts Not Found
 */

/**
 * @swagger
 * /api/students/{student_id}/student-quiz-attempts/{id}:
 *   delete:
 *     summary: delete student quiz attempts by id
 *     tags: [Student Quiz Attempts]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *       - in: query
 *         name: student_id
 *         required: true
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - student_id
 *             properties:
 *               id:
 *                 type: integer
 *               student_id:
 *                 type: integer
 *             example:
 *               id: 1
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
 *               message: student quiz attempts Not Found
 */
