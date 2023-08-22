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

  const { rows: spielerRows } = await query(
    `SELECT sp.*, SUM(zt.betrag) as zuzahlen
from spieler_tbl sp
         LEFT JOIN zahlungen_tbl zt on sp.s_id = zt.fk_s_id
WHERE isadmin = false
GROUP BY sp.s_id, sp.nachname ORDER BY sp.nachname ASC;`,
  );
  if (!spielerRows[0]) return null;
  obj.spieler = spielerRows;

  const { rows: insgesamtSummeRows } = await query(`
  SELECT SUM(betrag) as sum
  from zahlungen_tbl
  WHERE bezahlt = true;`);
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

export { testDB, spielerBekommenDB, spielerErstellenDB, spielerLoeschenDB, loginDB };
