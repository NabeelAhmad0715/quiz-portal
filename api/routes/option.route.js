const express = require('express');

const router = express.Router();
const {
  index,
  show,
  store,
  update,
  destroy,
} = require('../controllers/option.controller');
const { checkRole, userAuth } = require('../utils/Auth');

/* Route Router */
router.get('/', userAuth, checkRole(['teacher', 'admin']), index);
router.get('/:id/show', userAuth, checkRole(['teacher', 'admin']), show);
router.post('/create', userAuth, checkRole(['teacher', 'admin']), store);
router.put('/:id/update', userAuth, checkRole(['teacher', 'admin']), update);
router.delete(
  '/:id/delete',
  userAuth,
  checkRole(['teacher', 'admin']),
  destroy,
);
module.exports = router;

/**
 * @swagger
 * /api/question-banks/questions/options:
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
 * /api/question-banks/questions/options/{id}/show:
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
 * /api/question-banks/questions/options/create:
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
 * /api/question-banks/questions/options/{id}/update:
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
 * /api/question-banks/questions/options/{id}/create:
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
