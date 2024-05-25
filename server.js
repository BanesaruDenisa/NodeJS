const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const furnizorRoutes = require('./routes/furnizorRoutes');
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const authRoutes = require('./routes/authRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

// // Swagger setup
// const swaggerOptions = {
//   swaggerDefinition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'API pentru Gestionarea Furnizorilor, Produselor și Recenziilor',
//       version: '1.0.0',
//       description: 'API pentru gestionarea furnizorilor, produselor și recenziilor',
//     },
//     servers: [
//       {
//         url: 'http://localhost:3000',
//       },
//     ],
//     components: {
//       securitySchemes: {
//         bearerAuth: {
//           type: 'http',
//           scheme: 'bearer',
//           bearerFormat: 'JWT',
//         },
//       },
//       schemas: {
//         Produs: {
//           type: 'object',
//           properties: {
//             id: {
//               type: 'integer',
//               example: 1
//             },
//             name: {
//               type: 'string',
//               example: 'Produs Exemplu'
//             },
//             brand: {
//               type: 'string',
//               example: 'Brand Exemplu'
//             },
//             description: {
//               type: 'string',
//               example: 'Descriere exemplu pentru produs'
//             },
//             furnizorId: {
//               type: 'integer',
//               example: 1
//             },
//             createdAt: {
//               type: 'string',
//               format: 'date-time'
//             },
//             updatedAt: {
//               type: 'string',
//               format: 'date-time'
//             }
//           }
//         },
//         Review: {
//           type: 'object',
//           properties: {
//             id: {
//               type: 'integer',
//               example: 1
//             },
//             content: {
//               type: 'string',
//               example: 'Recenzie exemplu pentru produs'
//             },
//             rating: {
//               type: 'integer',
//               example: 5
//             },
//             productId: {
//               type: 'integer',
//               example: 1
//             },
//             createdAt: {
//               type: 'string',
//               format: 'date-time'
//             },
//             updatedAt: {
//               type: 'string',
//               format: 'date-time'
//             }
//           }
//         }
//       }
//     },
//     security: [
//       {
//         bearerAuth: []
//       }
//     ],
//   },
//   apis: ['./routes/*.js'],
// };

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API pentru Gestionarea Furnizorilor, Produselor și Recenziilor',
      version: '1.0.0',
      description: 'API pentru gestionarea furnizorilor, produselor și recenziilor',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Produs: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            name: {
              type: 'string',
              example: 'Produs Exemplu'
            },
            brand: {
              type: 'string',
              example: 'Brand Exemplu'
            },
            description: {
              type: 'string',
              example: 'Descriere exemplu pentru produs'
            },
            furnizorId: {
              type: 'integer',
              example: 1
            },
            createdAt: {
              type: 'string',
              format: 'date-time'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        Review: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            content: {
              type: 'string',
              example: 'Recenzie exemplu pentru produs'
            },
            rating: {
              type: 'integer',
              example: 5
            },
            productId: {
              type: 'integer',
              example: 1
            },
            createdAt: {
              type: 'string',
              format: 'date-time'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time'
            }
          }
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/furnizori', furnizorRoutes);
app.use('/produse', productRoutes);
app.use('/recenzii', reviewRoutes);

sequelize.sync().then(() => {
  console.log('Database synchronized');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
