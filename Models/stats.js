import { query, pool } from '../DB/index.js';

const getPaymentTypeDB = async () => {
  const { rows } = await query(
    'SELECT COUNT(CASE WHEN barzahlung = true THEN 1 ELSE NULL END) AS barzahlung, COUNT(CASE WHEN barzahlung = false THEN 1 ELSE NULL END) AS karte FROM zahlungen_tbl;',
  );

  if (!rows[0]) return null;
  return rows;
};

const getSumTypeDB = async () => {
  const { rows } = await query(
    'SELECT SUM(CASE WHEN barzahlung = true THEN betrag ELSE 0 END) AS barzahlung, SUM(CASE WHEN barzahlung = false THEN betrag ELSE 0 END) AS karte FROM zahlungen_tbl;',
  );
  if (!rows[0]) return null;
  return rows;
};

export { getPaymentTypeDB, getSumTypeDB };
