const express = require('express');
const db = require('../models');
const authMiddleware = require('../middlewares/authMiddleware');
const validatePayload = require('../middlewares/validatePayload');
const { reviewSchema } = require('../validators/schemas');

const router = express.Router();

// /**
//  * @swagger
//  * tags:
//  *   name: Recenzii
//  *   description: Gestionarea recenziilor
//  */

// /**
//  * @swagger
//  * /recenzii:
//  *   get:
//  *     summary: Returnează o listă cu toate recenziile
//  *     tags: [Recenzii]
//  *     responses:
//  *       200:
//  *         description: O listă cu recenzii
//  */
// router.get('/', authMiddleware, async (req, res) => {
//   try {
//     const recenzii = await db.Review.findAll();
//     res.json(recenzii);
//   } catch (error) {
//     console.error('Eroare la preluarea recenziilor:', error);
//     res.status(500).send(error.message);
//   }
// });

/**
 * @swagger
 * /recenzii:
 *   post:
 *     summary: Creează o nouă recenzie
 *     tags: [Recenzii]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *               - rating
 *               - userId
 *               - productId
 *             properties:
 *               content:
 *                 type: string
 *               rating:
 *                 type: integer
 *               userId:
 *                 type: integer
 *               productId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Recenzie creată
 *       500:
 *         description: Eroare server
 */
router.post('/', authMiddleware, async (req, res) => {
  try {
    const recenzie = await db.Review.create(req.body);
    res.status(201).json(recenzie);
  } catch (error) {
    console.error('Eroare la crearea recenziei:', error);
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * /recenzii/{id}:
 *   get:
 *     summary: Returnează detalii despre o recenzie specifică
 *     tags: [Recenzii]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID-ul recenziei
 *     responses:
 *       200:
 *         description: Detalii recenzie
 *       404:
 *         description: Recenzie nu a fost găsită
 */
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const recenzie = await db.Review.findByPk(req.params.id);
    if (recenzie) {
      res.json(recenzie);
    } else {
      res.status(404).send('Recenzie nu a fost găsită');
    }
  } catch (error) {
    console.error('Eroare la preluarea recenziei:', error);
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * /recenzii/update/{id}:
 *   post:
 *     summary: Actualizează o recenzie existentă
 *     tags: [Recenzii]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID-ul recenziei
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               rating:
 *                 type: integer
 *               userId:
 *                 type: integer
 *               productId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Recenzie actualizată
 *       404:
 *         description: Recenzie nu a fost găsită
 *       500:
 *         description: Eroare server
 */
router.post('/update/:id', authMiddleware, async (req, res) => {
  try {
    const recenzie = await db.Review.findByPk(req.params.id);
    if (recenzie) {
      await recenzie.update(req.body);
      res.json(recenzie);
    } else {
      res.status(404).send('Recenzie nu a fost găsită');
    }
  } catch (error) {
    console.error('Eroare la actualizarea recenziei:', error);
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * /recenzii/delete/{id}:
 *   post:
 *     summary: Șterge o recenzie
 *     tags: [Recenzii]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID-ul recenziei
 *     responses:
 *       200:
 *         description: Recenzie ștearsă
 *       404:
 *         description: Recenzie nu a fost găsită
 *       500:
 *         description: Eroare server
 */
router.post('/delete/:id', authMiddleware, async (req, res) => {
  try {
    const recenzie = await db.Review.findByPk(req.params.id);
    if (recenzie) {
      await recenzie.destroy();
      res.json({ message: 'Recenzie ștearsă' });
    } else {
      res.status(404).send('Recenzie nu a fost găsită');
    }
  } catch (error) {
    console.error('Eroare la ștergerea recenziei:', error);
    res.status(500).send(error.message);
  }
});

router.post('/', validatePayload(reviewSchema), async (req, res) => {
    try {
      const recenzie = await db.Review.create(req.body);
      res.status(201).json(recenzie);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  
  router.post('/update/:id', validatePayload(reviewSchema), async (req, res) => {
    try {
      const recenzie = await db.Review.findByPk(req.params.id);
      if (recenzie) {
        await recenzie.update(req.body);
        res.json(recenzie);
      } else {
        res.status(404).send('Recenzie not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  });


/**
 * @swagger
 * tags:
 *   name: Recenzii
 *   description: Gestionarea recenziilor
 */

/**
 * @swagger
 * /recenzii:
 *   get:
 *     summary: Returnează o listă cu toate recenziile, cu opțiuni de sortare și filtrare
 *     tags: [Recenzii]
 *     parameters:
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, rating, createdAt]
 *         description: Câmpul după care se sortează
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Ordinea de sortare (ascendentă sau descendentă)
 *       - in: query
 *         name: minRating
 *         schema:
 *           type: integer
 *         description: Filtrare după ratingul minim al recenziilor
 *     responses:
 *       200:
 *         description: O listă cu toate recenziile
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 *       500:
 *         description: Eroare server
 *     security:
 *       - bearerAuth: []
 */
router.get('/', authMiddleware, async (req, res) => {
    const { sort = 'id', order = 'ASC', minRating } = req.query;
    console.log('Sort:', sort);
    console.log('Order:', order);
    console.log('MinRating:', minRating);
  
    let queryOptions = {
      order: [
        [sort, order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC']
      ]
    };
  
    // Adăugare filtrare după rating
    if (minRating) {
      queryOptions.where = {
        rating: {
          [db.Sequelize.Op.gte]: minRating
        }
      };
    }
  
    console.log('Query Options:', queryOptions);
  
    try {
      const recenzii = await db.Review.findAll(queryOptions);
      res.status(200).json(recenzii);
    } catch (error) {
      console.error('Eroare la preluarea recenziilor:', error);
      res.status(500).send(error.message);
    }
  });

module.exports = router;
