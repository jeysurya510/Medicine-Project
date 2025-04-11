const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

app.use(cors())
app.use(express.json());

const dbPath = path.join(__dirname, 'user.db');
let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    await db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT
      )
    `)
    await db.run(`DROP TABLE IF EXISTS products`);

await db.run(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    category TEXT,
    description TEXT,
    image TEXT,
    price REAL
  )
`);


    const count = await db.get(`SELECT COUNT(*) AS count FROM products`);
    if (count.count === 0) {
      for (let i = 1; i <= 50; i++) {
        const name = `Medicine ${i}`;
        const category = faker.helpers.arrayElement(['Orphan', 'Essential', 'Emergency', 'OTC']);
        const description = faker.commerce.productDescription();
        const image = faker.image.urlLoremFlickr({ category: 'medical' });
        const price = parseFloat(faker.commerce.price(100, 5000));

        await db.run(
          `INSERT INTO products (name, category, description, image, price)
           VALUES (?, ?, ?, ?, ?)`,
          [name, category, description, image, price]
        );
      }
    }

    app.listen(5000, () => {
      console.log('Server is running at http://localhost:5000');
    });
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

// Register API
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = await db.get(`SELECT * FROM users WHERE email = ?`, [email]);

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.run(
      `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
      [name, email, hashedPassword]
    );

    res.status(200).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Login API
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await db.get(`SELECT * FROM users WHERE email = ?`, [email]);

  if (!user) {
    res.status(400).json('Invalid user');
  } else {
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      const payload = { userId: user.id, name: user.name };
      const jwtToken = jwt.sign(payload, 'secretkey');

      res.json({ jwtToken });
    } else {
      res.status(400).json('Invalid password');
    }
  }
});

//Api 3 Products

app.get("/products/", (request, response) => {
  let jwtToken;
  const authHeader = request.headers["authorization"];
  if (authHeader !== undefined) {
    jwtToken = authHeader.split(" ")[1];  
  }
  if (jwtToken === undefined) {
    response.status(401);
    response.send("Invalid Access Token");
  } else {
    jwt.verify(jwtToken, "secretkey", async (error, payload) => {
      if (error) {
        response.send("Invalid Access Token");
      } else {
        const getproducts = `
            SELECT
              *
            FROM
             produts
            ORDER BY id`;
        const productArray = await db.all(getproducts);
        response.json(productArray);
      }
    });
  }
});