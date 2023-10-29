import pg from 'pg';

// const pool = new pg.Pool();
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  // host: 'dpg-cjkf3kr37aks739ijo5g-a.frankfurt-postgres.render.com',
  // user: 'wwuser',
  // database: 'wwmk',
  // password: 'CYcP6eQksXChXlifzyOLVc0qYWi2W2mo',
  // port: 5432,
});

const query = (text, params) => pool.query(text, params);

export { query, pool };
