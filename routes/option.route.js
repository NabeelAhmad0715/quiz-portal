const express = require('express');

const router = express.Router();
const OptionController = require('../controllers').option;

/* Student Router */
router.get('/', OptionController.index);
router.get('/:id', OptionController.show);
router.post('/', OptionController.store);
router.put('/:id', OptionController.update);
router.delete('/:id', OptionController.delete);
module.exports = router;

/**
 * @swagger
 * /api/question-banks/{question_bank_id}/questions/{question_id}/options:
 *   get:
 *     summary: all options
 *     tags: [Options]
 *     parameters:
 *       - name: question_bank_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: question_id
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
 *               - question_bank_id
 *               - question_id
 *             properties:
 *               question_bank_id:
 *                 type: integer
 *               question_id:
 *                 type: integer
 *             example:
 *               question_bank_id: 1
 *               question_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Option:
 *                   $ref: '#/components/schemas/Option'
 *                 questionBank:
 *                   $ref: '#/components/schemas/QuestionBank'
 *                 question:
 *                   $ref: '#/components/schemas/Question'
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
 * /api/question-banks/{question_bank_id}/questions/{question_id}/options/{id}:
 *   get:
 *     summary: get option by id
 *     tags: [Options]
 *     parameters:
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: question_bank_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: question_id
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
 *               - question_bank_id
 *               - question_id
 *             properties:
 *               id:
 *                 type: integer
 *               question_bank_id:
 *                 type: integer
 *               question_id:
 *                 type: integer
 *             example:
 *               id: 1
 *               question_bank_id: 1
 *               question_id: 1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Option:
 *                   $ref: '#/components/schemas/Option'
 *                 questionBank:
 *                   $ref: '#/components/schemas/QuestionBank'
 *                 question:
 *                   $ref: '#/components/schemas/Question'
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
 * /api/question-banks/{question_bank_id}/questions/{question_id}/options:
 *   post:
 *     summary: add option
 *     tags: [Options]
 *     parameters:
 *       - name: question_bank_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: question_id
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
 *               - question_bank_id
 *               - question_id
 *               - text
 *               - is_correct
 *             properties:
 *               question_bank_id:
 *                 type: integer
 *               question_id:
 *                 type: integer
 *               text:
 *                 type: string
 *               is_correct:
 *                 type: boolean
 *             example:
 *               question_bank_id: 1
 *               question_id: 1
 *               text: '3000'
 *               is_correct: '1'
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 option:
 *                   $ref: '#/components/schemas/Option'
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
 * /api/question-banks/{question_bank_id}/questions/{question_id}/options/{id}:
 *   put:
 *     summary: update option by id
 *     tags: [Options]
 *     parameters:
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: question_bank_id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: question_id
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
 *               - question_bank_id
 *               - question_id
 *               - text
 *               - is_correct
 *             properties:
 *               question_bank_id:
 *                 type: integer
 *               question_id:
 *                 type: integer
 *               text:
 *                 type: string
 *               is_correct:
 *                 type: boolean
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 option:
 *                   $ref: '#/components/schemas/Option'
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
 * /api/question-banks/{question_bank_id}/questions/{question_id}/options/{id}:
 *   delete:
 *     summary: delete option by id
 *     tags: [Options]
 *     parameters:
 *       - name: id
 *         in: path
 *         type: integer
 *         required: true
 *       - name: question_bank_id
 *         in: path
 *         type: integer
 *       - name: question_id
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
 *               - question_bank_id
 *               - question_id
 *             properties:
 *               id:
 *                 type: integer
 *               question_bank_id:
 *                 type: integer
 *               question_id:
 *                 type: integer
 *             example:
 *               id: 1
 *               question_bank_id: 1
 *               question_id: 1
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
 *               message: Option Not Found
 */
