import { query, pool } from '../DB/index.js';

//Zahlung von Spieler bekommen
// const spielerZahlungBekommenDB = async (s_id) => {
//   //Schauen ob User existiert
//   const { rows } = await query('SELECT * FROM zahlungen_tbl WHERE fk_s_id = $1', [s_id]);

//   if (!rows[0]) return null;
//   return rows;
// };

const spielerZahlungBekommenDB = async (s_id) => {
  //Schauen ob User existiert
  const { rows } = await query(
    'SELECT z_id, bezahlt, betrag, grund, barzahlung, zeitpunkt, vorname, nachname, profilbild_url, isAdmin from zahlungen_tbl JOIN spieler_tbl st on st.s_id = zahlungen_tbl.fk_s_id ORDER BY zeitpunkt DESC;',
  );

  if (!rows[0]) return null;
  return rows;
};

//Zahlung von Spieler erstellen
const spielerZahlungErstellenDB = async (neueZahlung) => {
  //Schauen ob User existiert
  const { rows } = await query(
    'INSERT INTO zahlungen_tbl (fk_s_id, betrag, grund, zeitpunkt) VALUES ($1, $2, $3, now()) RETURNING *',
    [neueZahlung.spielerID, neueZahlung.betrag, neueZahlung.grund],
  );

  if (!rows[0]) return null;
  return rows[0];
};

//Zahlung von Spieler löschen
const spielerZahlungLoeschenDB = async (z_id) => {
  //Schauen ob User existiert
  const { rows } = await query('DELETE FROM zahlungen_tbl WHERE z_id = $1 RETURNING *', [z_id]);

  if (!rows[0]) return null;
  return rows[0];
};

//Zahlung von Spieler löschen
const spielerZahlungBezahlenDB = async (z_id, params) => {
  let patched = undefined;
  //Schauen ob User existiert
  const transaktion = await pool.connect();

  try {
    await transaktion.query('BEGIN');

    //Änderung
    const { rows } = await transaktion.query(
      'UPDATE zahlungen_tbl SET bezahlt = TRUE WHERE z_id = $1 RETURNING *',
      [z_id],
    );

    if (params.zahlungsart === 'bar') {
      const { rows } = await transaktion.query(
        'UPDATE zahlungen_tbl SET barzahlung = TRUE WHERE z_id = $1 RETURNING *',
        [z_id],
      );
    } else {
      const { rows } = await transaktion.query(
        'UPDATE zahlungen_tbl SET barzahlung = FALSE WHERE z_id = $1 RETURNING *',
        [z_id],
      );
    }

    patched = rows[0];

    await transaktion.query('COMMIT');
  } catch {
    await transaktion.query('ROLLBACK');
  } finally {
    await transaktion.release();
  }

  if (!patched) return null;
  return patched;
};

const getAusgabenDB = async () => {
  const { rows } = await query(
    'SELECT a_id, amount, reason, zeitpunkt from ausgaben order by zeitpunkt DESC;',
  );

  if (!rows[0]) return null;
  return rows;
};

const postAusgabenDB = async (amount, reason) => {
  const { rows } = await query(
    'INSERT INTO ausgaben (amount, reason, zeitpunkt) VALUES ($1, $2, now()) RETURNING *',
    [amount, reason],
  );

  if (!rows[0]) return null;
  return rows[0];
};

export {
  spielerZahlungBekommenDB,
  spielerZahlungErstellenDB,
  spielerZahlungLoeschenDB,
  spielerZahlungBezahlenDB,
  getAusgabenDB,
  postAusgabenDB,
};
