const express = require('express');

const router = express.Router();
const QuestionBankController = require('../controllers').questionBank;

/* question Bank Router */
router.get('/', QuestionBankController.index);
router.get('/:id', QuestionBankController.show);
router.post('/', QuestionBankController.store);
router.put('/:id', QuestionBankController.update);
router.delete('/:id', QuestionBankController.delete);
module.exports = router;

/**
 * @swagger
 * /api/teacher/{teacher_id}/question-banks:
 *   get:
 *     summary: all question Banks
 *     tags: [Question Banks]
 *     parameters:
 *       - name: teacher_id
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
 *             properties:
 *               teacher_id:
 *                 type: integer
 *             example:
 *               teacher_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 questionBank:
 *                   $ref: '#/components/schemas/QuestionBank'
 *                 question:
 *                   $ref: '#/components/schemas/Question'
 *                 scheduleQuiz:
 *                   $ref: '#/components/schemas/ScheduleQuiz'
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
 * /api/teacher/{teacher_id}/question-banks/{id}:
 *   get:
 *     summary: get question Bank by id
 *     tags: [Question Banks]
 *     parameters:
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: teacher_id
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
 *             properties:
 *               id:
 *                 type: integer
 *               teacher_id:
 *                 type: integer
 *             example:
 *               id: 1
 *               teacher_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 questionBank:
 *                   $ref: '#/components/schemas/QuestionBank'
 *                 question:
 *                   $ref: '#/components/schemas/Question'
 *                 scheduleQuiz:
 *                   $ref: '#/components/schemas/ScheduleQuiz'
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
 * /api/teacher/{teacher_id}/question-banks:
 *   post:
 *     summary: add question Bank
 *     tags: [Question Banks]
 *     parameters:
 *       - name: teacher_id
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
 *               - name
 *               - type
 *             properties:
 *               teacher_id:
 *                 type: integer
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *             example:
 *               teacher_id: 1
 *               name: xyz
 *               type: javascript
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 questionBank:
 *                   $ref: '#/components/schemas/QuestionBank'
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
 * /api/teacher/{teacher_id}/question-banks/{id}:
 *   put:
 *     summary: update question Bank by id
 *     tags: [Question Banks]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *       - in: query
 *         name: teacher_id
 *         required: true
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - teacher_id
 *               - name
 *               - type
 *             properties:
 *               teacher_id:
 *                 type: integer
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *             example:
 *               teacher_id: xyz
 *               name: xyz
 *               type: javascript
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 questionBank:
 *                   $ref: '#/components/schemas/QuestionBank'
 *       "404":
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 404
 *               message: Question Bank Not Found
 */

/**
 * @swagger
 * /api/teacher/{teacher_id}/question-banks/{id}:
 *   delete:
 *     summary: delete question bank by id
 *     tags: [Question Banks]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *       - in: query
 *         name: teacher_id
 *         required: true
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - teacher_id
 *             properties:
 *               id:
 *                 type: integer
 *               teacher_id:
 *                 type: integer
 *             example:
 *               id: 1
 *               teacher_id: 1
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
 *               message: Question Bank Not Found
 */