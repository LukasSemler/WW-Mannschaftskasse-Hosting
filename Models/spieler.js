import { query, pool } from '../DB/index.js';
import bcrypt from 'bcrypt';

//TEST
const testDB = async (email, password) => {
  //Schauen ob User existiert
  const { rows } = await query("SELECT 'HELLO WORLD' AS Msg");

  if (!rows[0]) return null;

  return rows[0];
};

//Spieler bekommen
const spielerBekommenDB = async () => {
  let obj = {};

  //Alle Spieler bekommen
  const { rows: spielerRows } = await query(
    `SELECT sp.*, SUM(zt.betrag) as zuzahlen
from spieler_tbl sp
         LEFT JOIN zahlungen_tbl zt on sp.s_id = zt.fk_s_id
WHERE isadmin = false
GROUP BY sp.s_id, sp.nachname ORDER BY sp.nachname ASC;`,
  );
  if (!spielerRows[0]) return null;
  obj.spieler = spielerRows;

  //Die ganze bisher eingezahlte Summe bekommen
  const { rows: insgesamtSummeRows } = await query(`
  SELECT (SELECT SUM(betrag) from zahlungen_tbl WHERE bezahlt = true) - (SELECT CASE WHEN SUM(amount) IS NULL THEN 0 ELSE SUM(amount) END from ausgaben) as sum;`);
  if (!insgesamtSummeRows[0]) return null;
  obj.insgesamtEingezahlteSumme = insgesamtSummeRows[0].sum;

  return obj;
};

//Spieler erstellen
const spielerErstellenDB = async (neuerSpieler) => {
  //Spieler in DB anlegen
  const { rows } = await query(
    'INSERT INTO spieler_tbl (vorname, nachname, email, profilbild_url) VALUES ($1, $2, $3, $4) RETURNING *',
    [neuerSpieler.vorname, neuerSpieler.nachname, neuerSpieler.email, neuerSpieler.profilbildUrl],
  );

  if (!rows[0]) return null;
  return rows[0];
};

//Spieler löschen
const spielerLoeschenDB = async (s_id) => {
  //Spieler in DB anlegen
  const { rows } = await query('DELETE FROM spieler_tbl WHERE s_id = $1 RETURNING *', [s_id]);

  if (!rows[0]) return null;
  return rows[0];
};

const loginDB = async (email, password) => {
  const { rows } = await query('SELECT * from spieler_tbl where email = $1 and passwort = $2', [
    email,
    password,
  ]);

  if (rows[0]) return rows[0];
  return false;
};

const getPaymentTypePlayerDB = async (id) => {
  const { rows } = await query(
    'SELECT COUNT(CASE WHEN barzahlung = true THEN 1 ELSE NULL END) AS barzahlung, COUNT(CASE WHEN barzahlung = false THEN 1 ELSE NULL END) AS karte, COUNT(CASE WHEN bezahlt = false THEN 1 ELSE NULL END) AS offen, COUNT(fk_s_id) AS total FROM zahlungen_tbl WHERE fk_s_id = $1;',
    [id],
  );

  if (!rows[0]) return null;
  return rows;
};

const getSumTypePlayerDB = async (id) => {
  const { rows } = await query(
    'SELECT SUM(CASE WHEN barzahlung = true THEN betrag ELSE 0 END) AS barzahlung, SUM(CASE WHEN barzahlung = false THEN betrag ELSE 0 END) AS karte FROM zahlungen_tbl WHERE fk_s_id = $1;',
    [id],
  );
  if (!rows[0]) return null;
  return rows;
};

export {
  testDB,
  spielerBekommenDB,
  spielerErstellenDB,
  spielerLoeschenDB,
  loginDB,
  getPaymentTypePlayerDB,
  getSumTypePlayerDB,
};
