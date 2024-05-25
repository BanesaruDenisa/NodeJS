// // const express = require('express');
// // const db = require('../models');
// // const authMiddleware = require('../middlewares/authMiddleware');

// // const router = express.Router();

// // /**
// //  * @swagger
// //  * tags:
// //  *   name: Furnizori
// //  *   description: Gestionarea furnizorilor
// //  */

// // /**
// //  * @swagger
// //  * /furnizori:
// //  *   get:
// //  *     summary: Returnează o listă cu toți furnizorii
// //  *     tags: [Furnizori]
// //  *     responses:
// //  *       200:
// //  *         description: O listă cu furnizori
// //  */
// // router.get('/', authMiddleware, async (req, res) => {
// //   try {
// //     const furnizori = await db.Furnizor.findAll();
// //     res.render('furnizori', { furnizori });
// //   } catch (error) {
// //     res.status(500).send(error.message);
// //   }
// // });

// // /**
// //  * @swagger
// //  * /furnizori:
// //  *   post:
// //  *     summary: Creează un nou furnizor
// //  *     tags: [Furnizori]
// //  *     requestBody:
// //  *       required: true
// //  *       content:
// //  *         application/json:
// //  *           schema:
// //  *             type: object
// //  *             required:
// //  *               - name
// //  *               - brand
// //  *               - cui
// //  *             properties:
// //  *               name:
// //  *                 type: string
// //  *               brand:
// //  *                 type: string
// //  *               cui:
// //  *                 type: string
// //  *     responses:
// //  *       201:
// //  *         description: Furnizor creat
// //  *       500:
// //  *         description: Eroare server
// //  */
// // router.post('/', authMiddleware, async (req, res) => {
// //   try {
// //     const furnizor = await db.Furnizor.create(req.body);
// //     res.status(201).redirect('/furnizori');
// //   } catch (error) {
// //     res.status(500).send(error.message);
// //   }
// // });

// // /**
// //  * @swagger
// //  * /furnizori/{id}:
// //  *   get:
// //  *     summary: Returnează detalii despre un furnizor specific
// //  *     tags: [Furnizori]
// //  *     parameters:
// //  *       - in: path
// //  *         name: id
// //  *         required: true
// //  *         schema:
// //  *           type: integer
// //  *         description: ID-ul furnizorului
// //  *     responses:
// //  *       200:
// //  *         description: Detalii furnizor
// //  *       404:
// //  *         description: Furnizorul nu a fost găsit
// //  */
// // router.get('/:id', authMiddleware, async (req, res) => {
// //   try {
// //     const furnizor = await db.Furnizor.findByPk(req.params.id);
// //     if (furnizor) {
// //       res.render('furnizor', { furnizor });
// //     } else {
// //       res.status(404).send('Furnizor nu a fost găsit');
// //     }
// //   } catch (error) {
// //     res.status(500).send(error.message);
// //   }
// // });

// // /**
// //  * @swagger
// //  * /furnizori/update/{id}:
// //  *   post:
// //  *     summary: Actualizează un furnizor existent
// //  *     tags: [Furnizori]
// //  *     parameters:
// //  *       - in: path
// //  *         name: id
// //  *         required: true
// //  *         schema:
// //  *           type: integer
// //  *         description: ID-ul furnizorului
// //  *     requestBody:
// //  *       required: true
// //  *       content:
// //  *         application/json:
// //  *           schema:
// //  *             type: object
// //  *             properties:
// //  *               name:
// //  *                 type: string
// //  *               brand:
// //  *                 type: string
// //  *               cui:
// //  *                 type: string
// //  *     responses:
// //  *       200:
// //  *         description: Furnizor actualizat
// //  *       404:
// //  *         description: Furnizorul nu a fost găsit
// //  *       500:
// //  *         description: Eroare server
// //  */
// // router.post('/update/:id', authMiddleware, async (req, res) => {
// //   try {
// //     const furnizor = await db.Furnizor.findByPk(req.params.id);
// //     if (furnizor) {
// //       await furnizor.update(req.body);
// //       res.redirect('/furnizori');
// //     } else {
// //       res.status(404).send('Furnizor nu a fost găsit');
// //     }
// //   } catch (error) {
// //     res.status(500).send(error.message);
// //   }
// // });

// // /**
// //  * @swagger
// //  * /furnizori/delete/{id}:
// //  *   post:
// //  *     summary: Șterge un furnizor
// //  *     tags: [Furnizori]
// //  *     parameters:
// //  *       - in: path
// //  *         name: id
// //  *         required: true
// //  *         schema:
// //  *           type: integer
// //  *         description: ID-ul furnizorului
// //  *     responses:
// //  *       200:
// //  *         description: Furnizor șters
// //  *       404:
// //  *         description: Furnizorul nu a fost găsit
// //  *       500:
// //  *         description: Eroare server
// //  */
// // router.post('/delete/:id', authMiddleware, async (req, res) => {
// //   try {
// //     const furnizor = await db.Furnizor.findByPk(req.params.id);
// //     if (furnizor) {
// //       await furnizor.destroy();
// //       res.redirect('/furnizori');
// //     } else {
// //       res.status(404).send('Furnizor nu a fost găsit');
// //     }
// //   } catch (error) {
// //     res.status(500).send(error.message);
// //   }
// // });

// // module.exports = router;


// const express = require('express');
// const db = require('../models');
// const authMiddleware = require('../middlewares/authMiddleware');

// const router = express.Router();

// /**
//  * @swagger
//  * tags:
//  *   name: Furnizori
//  *   description: Gestionarea furnizorilor
//  */

// /**
//  * @swagger
//  * /furnizori:
//  *   get:
//  *     summary: Returnează o listă cu toți furnizorii
//  *     tags: [Furnizori]
//  *     responses:
//  *       200:
//  *         description: O listă cu furnizori
//  */
// router.get('/', authMiddleware, async (req, res) => {
//   try {
//     const furnizori = await db.Furnizor.findAll();
//     res.json(furnizori);  // Folosim res.json în loc de res.render pentru simplitate
//   } catch (error) {
//     console.error('Eroare la preluarea furnizorilor:', error);
//     res.status(500).send(error.message);
//   }
// });

// /**
//  * @swagger
//  * /furnizori:
//  *   post:
//  *     summary: Creează un nou furnizor
//  *     tags: [Furnizori]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - name
//  *               - brand
//  *               - cui
//  *             properties:
//  *               name:
//  *                 type: string
//  *               brand:
//  *                 type: string
//  *               cui:
//  *                 type: string
//  *     responses:
//  *       201:
//  *         description: Furnizor creat
//  *       500:
//  *         description: Eroare server
//  */
// router.post('/', authMiddleware, async (req, res) => {
//   try {
//     const furnizor = await db.Furnizor.create(req.body);
//     res.status(201).json(furnizor);
//   } catch (error) {
//     console.error('Eroare la crearea furnizorului:', error);
//     res.status(500).send(error.message);
//   }
// });

// /**
//  * @swagger
//  * /furnizori/{id}:
//  *   get:
//  *     summary: Returnează detalii despre un furnizor specific
//  *     tags: [Furnizori]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *         description: ID-ul furnizorului
//  *     responses:
//  *       200:
//  *         description: Detalii furnizor
//  *       404:
//  *         description: Furnizorul nu a fost găsit
//  */
// router.get('/:id', authMiddleware, async (req, res) => {
//   try {
//     const furnizor = await db.Furnizor.findByPk(req.params.id);
//     if (furnizor) {
//       res.json(furnizor);
//     } else {
//       res.status(404).send('Furnizor nu a fost găsit');
//     }
//   } catch (error) {
//     console.error('Eroare la preluarea furnizorului:', error);
//     res.status(500).send(error.message);
//   }
// });

// /**
//  * @swagger
//  * /furnizori/update/{id}:
//  *   post:
//  *     summary: Actualizează un furnizor existent
//  *     tags: [Furnizori]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *         description: ID-ul furnizorului
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
//  *               cui:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: Furnizor actualizat
//  *       404:
//  *         description: Furnizorul nu a fost găsit
//  *       500:
//  *         description: Eroare server
//  */
// router.post('/update/:id', authMiddleware, async (req, res) => {
//   try {
//     const furnizor = await db.Furnizor.findByPk(req.params.id);
//     if (furnizor) {
//       await furnizor.update(req.body);
//       res.json(furnizor);
//     } else {
//       res.status(404).send('Furnizor nu a fost găsit');
//     }
//   } catch (error) {
//     console.error('Eroare la actualizarea furnizorului:', error);
//     res.status(500).send(error.message);
//   }
// });

// /**
//  * @swagger
//  * /furnizori/delete/{id}:
//  *   post:
//  *     summary: Șterge un furnizor
//  *     tags: [Furnizori]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: integer
//  *         description: ID-ul furnizorului
//  *     responses:
//  *       200:
//  *         description: Furnizor șters
//  *       404:
//  *         description: Furnizorul nu a fost găsit
//  *       500:
//  *         description: Eroare server
//  */
// router.post('/delete/:id', authMiddleware, async (req, res) => {
//   try {
//     const furnizor = await db.Furnizor.findByPk(req.params.id);
//     if (furnizor) {
//       await furnizor.destroy();
//       res.json({ message: 'Furnizor șters' });
//     } else {
//       res.status(404).send('Furnizor nu a fost găsit');
//     }
//   } catch (error) {
//     console.error('Eroare la ștergerea furnizorului:', error);
//     res.status(500).send(error.message);
//   }
// });

// module.exports = router;


const express = require('express');
const db = require('../models');
const authMiddleware = require('../middlewares/authMiddleware');
const validatePayload = require('../middlewares/validatePayload');
const { furnizorSchema } = require('../validators/schemas');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Furnizori
 *   description: Gestionarea furnizorilor
 */

/**
 * @swagger
 * /furnizori:
 *   get:
 *     summary: Returnează o listă cu toți furnizorii
 *     tags: [Furnizori]
 *     responses:
 *       200:
 *         description: O listă cu furnizori
 */
router.get('/', authMiddleware, async (req, res) => {
  try {
    const furnizori = await db.Furnizor.findAll();
    res.json(furnizori);
  } catch (error) {
    console.error('Eroare la preluarea furnizorilor:', error);
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * /furnizori:
 *   post:
 *     summary: Creează un nou furnizor
 *     tags: [Furnizori]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - brand
 *               - cui
 *             properties:
 *               name:
 *                 type: string
 *               brand:
 *                 type: string
 *               cui:
 *                 type: string
 *     responses:
 *       201:
 *         description: Furnizor creat
 *       500:
 *         description: Eroare server
 */
router.post('/', authMiddleware, async (req, res) => {
  try {
    const furnizor = await db.Furnizor.create(req.body);
    res.status(201).json(furnizor);
  } catch (error) {
    console.error('Eroare la crearea furnizorului:', error);
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * /furnizori/{id}:
 *   get:
 *     summary: Returnează detalii despre un furnizor specific
 *     tags: [Furnizori]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID-ul furnizorului
 *     responses:
 *       200:
 *         description: Detalii furnizor
 *       404:
 *         description: Furnizor nu a fost găsit
 */
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const furnizor = await db.Furnizor.findByPk(req.params.id);
    if (furnizor) {
      res.json(furnizor);
    } else {
      res.status(404).send('Furnizor nu a fost găsit');
    }
  } catch (error) {
    console.error('Eroare la preluarea furnizorului:', error);
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * /furnizori/update/{id}:
 *   post:
 *     summary: Actualizează un furnizor existent
 *     tags: [Furnizori]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID-ul furnizorului
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
 *               cui:
 *                 type: string
 *     responses:
 *       200:
 *         description: Furnizor actualizat
 *       404:
 *         description: Furnizor nu a fost găsit
 *       500:
 *         description: Eroare server
 */
router.post('/update/:id', authMiddleware, async (req, res) => {
  try {
    const furnizor = await db.Furnizor.findByPk(req.params.id);
    if (furnizor) {
      await furnizor.update(req.body);
      res.json(furnizor);
    } else {
      res.status(404).send('Furnizor nu a fost găsit');
    }
  } catch (error) {
    console.error('Eroare la actualizarea furnizorului:', error);
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * /furnizori/delete/{id}:
 *   post:
 *     summary: Șterge un furnizor
 *     tags: [Furnizori]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID-ul furnizorului
 *     responses:
 *       200:
 *         description: Furnizor șters
 *       404:
 *         description: Furnizor nu a fost găsit
 *       500:
 *         description: Eroare server
 */
router.post('/delete/:id', authMiddleware, async (req, res) => {
  try {
    const furnizor = await db.Furnizor.findByPk(req.params.id);
    if (furnizor) {
      await furnizor.destroy();
      res.json({ message: 'Furnizor șters' });
    } else {
      res.status(404).send('Furnizor nu a fost găsit');
    }
  } catch (error) {
    console.error('Eroare la ștergerea furnizorului:', error);
    res.status(500).send(error.message);
  }
});

router.post('/', validatePayload(furnizorSchema), async (req, res) => {
    try {
      const furnizor = await db.Furnizor.create(req.body);
      res.status(201).json(furnizor);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  
  router.post('/update/:id', validatePayload(furnizorSchema), async (req, res) => {
    try {
      const furnizor = await db.Furnizor.findByPk(req.params.id);
      if (furnizor) {
        await furnizor.update(req.body);
        res.json(furnizor);
      } else {
        res.status(404).send('Furnizor not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

module.exports = router;
