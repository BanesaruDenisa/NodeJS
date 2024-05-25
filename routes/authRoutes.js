// const express = require('express');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const db = require('../models');
// require('dotenv').config();

// const router = express.Router();
// const JWT_SECRET = process.env.JWT_SECRET;

// /**
//  * @swagger
//  * tags:
//  *   name: Autentificare
//  *   description: Gestionarea autentificării
//  */

// /**
//  * @swagger
//  * /auth/signup:
//  *   post:
//  *     summary: Creează un nou utilizator
//  *     tags: [Autentificare]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - email
//  *               - password
//  *             properties:
//  *               email:
//  *                 type: string
//  *               password:
//  *                 type: string
//  *     responses:
//  *       201:
//  *         description: Utilizator creat
//  *       500:
//  *         description: Eroare server
//  */
// router.post('/signup', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     console.log('Hash generat la signup:', hashedPassword);
//     const user = await db.User.create({ email, password: hashedPassword });
//     const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
//     res.status(201).send({ token });
//   } catch (error) {
//     console.error('Eroare la signup:', error);
//     res.status(500).send(error.message);
//   }
// });

// /**
//  * @swagger
//  * /auth/signin:
//  *   post:
//  *     summary: Autentifică un utilizator existent
//  *     tags: [Autentificare]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - email
//  *               - password
//  *             properties:
//  *               email:
//  *                 type: string
//  *               password:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: Autentificare reușită
//  *       401:
//  *         description: Date de autentificare invalide
//  *       500:
//  *         description: Eroare server
//  */
// router.post('/signin', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await db.User.findOne({ where: { email } });
//     if (!user) {
//       console.log('Utilizator nu a fost găsit pentru email:', email);
//       return res.status(401).send('Invalid credentials');
//     }

//     console.log('Parola din baza de date:', user.password);
//     console.log('Parola introdusă:', password);

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     console.log('Este parola validă?', isPasswordValid);

//     if (!isPasswordValid) {
//       console.log('Parola este invalidă pentru utilizator:', user.email);
//       return res.status(401).send('Invalid credentials');
//     }

//     const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
//     res.send({ token });
//   } catch (error) {
//     console.error('Eroare la signin:', error);
//     res.status(500).send(error.message);
//   }
// });

// module.exports = router;

const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../models');
require('dotenv').config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * @swagger
 * tags:
 *   name: Autentificare
 *   description: Gestionarea autentificării
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Creează un nou utilizator
 *     tags: [Autentificare]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilizator creat
 *       500:
 *         description: Eroare server
 */
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.User.create({ email, password });
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '3h' });
    res.status(201).send({ token });
  } catch (error) {
    console.error('Eroare la signup:', error);
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * /auth/signin:
 *   post:
 *     summary: Autentifică un utilizator existent
 *     tags: [Autentificare]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Autentificare reușită
 *       401:
 *         description: Date de autentificare invalide
 *       500:
 *         description: Eroare server
 */
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '3h' });
    res.send({ token });
  } catch (error) {
    console.error('Eroare la signin:', error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
