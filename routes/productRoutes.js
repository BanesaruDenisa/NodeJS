// const express = require('express');
// const db = require('../models');
// const authMiddleware = require('../middlewares/authMiddleware');

// const router = express.Router();

// /**
//  * @swagger
//  * tags:
//  *   name: Produse
//  *   description: Gestionarea produselor
//  */

// /**
//  * @swagger
//  * /produse:
//  *   get:
//  *     summary: Returnează o listă cu toate produsele
//  *     tags: [Produse]
//  *     responses:
//  *       200:
//  *         description: O listă cu produse
//  */
// router.get('/', authMiddleware, async (req, res) => {
//   try {
//     const produse = await db.Product.findAll();
//     res.json(produse);
//   } catch (error) {
//     console.error('Eroare la preluarea produselor:', error);
//     res.status(500).send(error.message);
//   }
// });

// /**
//  * @swagger
//  * /produse:
//  *   post:
//  *     summary: Creează un nou produs
//  *     tags: [Produse]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - name
//  *               - brand
//  *               - description
//  *               - furnizorId
//  *             properties:
//  *               name:
//  *                 type: string
//  *               brand:
//  *                 type: string
//  *               description:
//  *                 type: string
//  *               furnizorId:
//  *                 type: integer
//  *     responses:
//  *       201:
//  *         description: Produs creat
//  *       500:
//  *         description: Eroare server
//  */
// router.post('/', authMiddleware, async (req, res) => {
//   try {
//     const produs = await db.Product.create(req.body);
//     res.status(201).json(produs);
//   } catch (error) {
//     console.error('Eroare la crearea produsului:', error);
//     res.status(500).send(error.message);
//   }
// });

// /**
//  * @swagger
//  * /produse/{id}:
//  *   get:
//  *     summary: Returnează detalii despre un produs specific
//  *     tags: [Produse]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *         description: ID-ul produsului
//  *     responses:
//  *       200:
//  *         description: Detalii produs
//  *       404:
//  *         description: Produsul nu a fost găsit
//  */
// router.get('/:id', authMiddleware, async (req, res) => {
//   try {
//     const produs = await db.Product.findByPk(req.params.id);
//     if (produs) {
//       res.json(produs);
//     } else {
//       res.status(404).send('Produs nu a fost găsit');
//     }
//   } catch (error) {
//     console.error('Eroare la preluarea produsului:', error);
//     res.status(500).send(error.message);
//   }
// });

// /**
//  * @swagger
//  * /produse/update/{id}:
//  *   post:
//  *     summary: Actualizează un produs existent
//  *     tags: [Produse]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *         description: ID-ul produsului
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               name:
//  *                 type: string
//  *               brand:
//  *                 type: string
//  *               description:
//  *                 type: string
//  *               furnizorId:
//  *                 type: integer
//  *     responses:
//  *       200:
//  *         description: Produs actualizat
//  *       404:
//  *         description: Produsul nu a fost găsit
//  *       500:
//  *         description: Eroare server
//  */
// router.post('/update/:id', authMiddleware, async (req, res) => {
//   try {
//     const produs = await db.Product.findByPk(req.params.id);
//     if (produs) {
//       await produs.update(req.body);
//       res.json(produs);
//     } else {
//       res.status(404).send('Produs nu a fost găsit');
//     }
//   } catch (error) {
//     console.error('Eroare la actualizarea produsului:', error);
//     res.status(500).send(error.message);
//   }
// });

// /**
//  * @swagger
//  * /produse/delete/{id}:
//  *   post:
//  *     summary: Șterge un produs
//  *     tags: [Produse]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *         description: ID-ul produsului
//  *     responses:
//  *       200:
//  *         description: Produs șters
//  *       404:
//  *         description: Produsul nu a fost găsit
//  *       500:
//  *         description: Eroare server
//  */
// router.post('/delete/:id', authMiddleware, async (req, res) => {
//   try {
//     const produs = await db.Product.findByPk(req.params.id);
//     if (produs) {
//       await produs.destroy();
//       res.json({ message: 'Produs șters' });
//     } else {
//       res.status(404).send('Produs nu a fost găsit');
//     }
//   } catch (error) {
//     console.error('Eroare la ștergerea produsului:', error);
//     res.status(500).send(error.message);
//   }
// });

// module.exports = router;

const express = require('express');
const db = require('../models');
const authMiddleware = require('../middlewares/authMiddleware');
const validatePayload = require('../middlewares/validatePayload');
const { productSchema } = require('../validators/schemas');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Produse
 *   description: Gestionarea produselor
 */

/**
 * @swagger
 * /produse:
 *   get:
 *     summary: Returnează o listă cu toate produsele
 *     tags: [Produse]
 *     responses:
 *       200:
 *         description: O listă cu produse
 */
router.get('/', authMiddleware, async (req, res) => {
  try {
    const produse = await db.Product.findAll();
    res.json(produse);
  } catch (error) {
    console.error('Eroare la preluarea produselor:', error);
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * /produse:
 *   post:
 *     summary: Creează un nou produs
 *     tags: [Produse]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - brand
 *               - description
 *               - furnizorId
 *             properties:
 *               name:
 *                 type: string
 *               brand:
 *                 type: string
 *               description:
 *                 type: string
 *               furnizorId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Produs creat
 *       500:
 *         description: Eroare server
 */
router.post('/', authMiddleware, async (req, res) => {
  try {
    const produs = await db.Product.create(req.body);
    res.status(201).json(produs);
  } catch (error) {
    console.error('Eroare la crearea produsului:', error);
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * /produse/{id}:
 *   get:
 *     summary: Returnează detalii despre un produs specific
 *     tags: [Produse]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID-ul produsului
 *     responses:
 *       200:
 *         description: Detalii produs
 *       404:
 *         description: Produs nu a fost găsit
 */
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const produs = await db.Product.findByPk(req.params.id);
    if (produs) {
      res.json(produs);
    } else {
      res.status(404).send('Produs nu a fost găsit');
    }
  } catch (error) {
    console.error('Eroare la preluarea produsului:', error);
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * /produse/update/{id}:
 *   post:
 *     summary: Actualizează un produs existent
 *     tags: [Produse]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID-ul produsului
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               brand:
 *                 type: string
 *               description:
 *                 type: string
 *               furnizorId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Produs actualizat
 *       404:
 *         description: Produs nu a fost găsit
 *       500:
 *         description: Eroare server
 */
router.post('/update/:id', authMiddleware, async (req, res) => {
  try {
    const produs = await db.Product.findByPk(req.params.id);
    if (produs) {
      await produs.update(req.body);
      res.json(produs);
    } else {
      res.status(404).send('Produs nu a fost găsit');
    }
  } catch (error) {
    console.error('Eroare la actualizarea produsului:', error);
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * /produse/delete/{id}:
 *   post:
 *     summary: Șterge un produs
 *     tags: [Produse]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID-ul produsului
 *     responses:
 *       200:
 *         description: Produs șters
 *       404:
 *         description: Produs nu a fost găsit
 *       500:
 *         description: Eroare server
 */
router.post('/delete/:id', authMiddleware, async (req, res) => {
  try {
    const produs = await db.Product.findByPk(req.params.id);
    if (produs) {
      await produs.destroy();
      res.json({ message: 'Produs șters' });
    } else {
      res.status(404).send('Produs nu a fost găsit');
    }
  } catch (error) {
    console.error('Eroare la ștergerea produsului:', error);
    res.status(500).send(error.message);
  }
});

router.post('/', validatePayload(productSchema), async (req, res) => {
  try {
    const produs = await db.Product.create(req.body);
    res.status(201).json(produs);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/update/:id', validatePayload(productSchema), async (req, res) => {
  try {
    const produs = await db.Product.findByPk(req.params.id);
    if (produs) {
      await produs.update(req.body);
      res.json(produs);
    } else {
      res.status(404).send('Produs not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});


// /**
//  * @swagger
//  * tags:
//  *   name: Produse
//  *   description: Gestionarea produselor
//  */

// /**
//  * @swagger
//  * /produse:
//  *   get:
//  *     summary: Returnează o listă cu toate produsele, cu opțiuni de sortare și filtrare
//  *     tags: [Produse]
//  *     parameters:
//  *       - in: query
//  *         name: sort
//  *         schema:
//  *           type: string
//  *           enum: [name, brand, rating]
//  *         description: Câmpul după care se sortează
//  *       - in: query
//  *         name: order
//  *         schema:
//  *           type: string
//  *           enum: [asc, desc]
//  *         description: Ordinea de sortare (ascendentă sau descendentă)
//  *       - in: query
//  *         name: brand
//  *         schema:
//  *           type: string
//  *         description: Filtrare după brand
//  *       - in: query
//  *         name: minRating
//  *         schema:
//  *           type: integer
//  *         description: Filtrare după ratingul minim al recenziilor
//  *     responses:
//  *       200:
//  *         description: O listă cu toate produsele
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/Produs'
//  *       500:
//  *         description: Eroare server
//  */
// router.get('/', async (req, res) => {
//   const { sort, order, brand, minRating } = req.query;
//   let queryOptions = {
//     include: [{
//       model: db.Review,
//       as: 'reviews'
//     }]
//   };

//   // Adăugare filtrare
//   if (brand) {
//     queryOptions.where = {
//       ...queryOptions.where,
//       brand
//     };
//   }

//   // Adăugare sortare
//   if (sort) {
//     queryOptions.order = [
//       [sort, order || 'ASC']
//     ];
//   }

//   // Adăugare filtrare după rating
//   if (minRating) {
//     queryOptions.include[0].where = {
//       ...queryOptions.include[0].where,
//       rating: {
//         [db.Sequelize.Op.gte]: minRating
//       }
//     };
//   }

//   try {
//     const produse = await db.Produs.findAll(queryOptions);
//     res.status(200).json(produse);
//   } catch (error) {
//     console.error('Eroare la preluarea produselor:', error);
//     res.status(500).send(error.message);
//   }
// });

module.exports = router;
