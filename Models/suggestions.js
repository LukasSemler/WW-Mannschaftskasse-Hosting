import { query, pool } from '../DB/index.js';

const getSuggestionsDB = async () => {
  //   const { rows } = await query(
  //     `SELECT
  //   s.vorname AS vorname,
  //   s.nachname AS nachname,
  //   s.profilbild_url as profilbild_url,
  //   v.suggestion AS vorschlag,

  //   COALESCE(SUM(CASE WHEN ld.bewertung = true THEN 1 ELSE 0 END), 0) AS anzahl_likes,
  //   COALESCE(SUM(CASE WHEN ld.bewertung = false THEN 1 ELSE 0 END), 0) AS anzahl_dislikes,
  //   CASE
  //     WHEN SUM(CASE WHEN ld.bewertung = true THEN 1 ELSE 0 END) > 0
  //          OR SUM(CASE WHEN ld.bewertung = false THEN 1 ELSE 0 END) > 0
  //     THEN true
  //     ELSE false
  //   END AS hat_likes_dislikes̵
  // FROM suggestions v
  // JOIN spieler_tbl s ON v.fk_spieler = s.s_id
  // LEFT JOIN suggestion_player ld ON v.sg_id = ld.fk_suggestion
  // GROUP BY s.vorname, s.nachname, v.suggestion, v.zeitpunkt, s.profilbild_url ORDER BY v.zeitpunkt DESC;
  //     `,
  //   );
  const { rows } = await query(
    `SELECT sg_id, suggestion, likes, dislikes, zeitpunkt from suggestions ORDER BY zeitpunkt DESC ;`,
  );

  if (!rows[0]) return null;
  return rows;
};

const addLikeDB = async (id) => {
  const { rows } = await query(
    `UPDATE suggestions SET likes = likes + 1 WHERE sg_id = $1 RETURNING *;`,
    [id],
  );

  if (!rows[0]) return null;
  return rows[0];
};

const addDislikeDB = async (id) => {
  const { rows } = await query(
    `UPDATE suggestions SET dislikes = dislikes + 1 WHERE sg_id = $1 RETURNING *;`,
    [id],
  );

  if (!rows[0]) return null;
  return rows[0];
};

const addSuggestionDB = async (suggestion) => {
  const { rows } = await query(
    `INSERT INTO suggestions (suggestion, zeitpunkt) VALUES ($1, now()) RETURNING *;`,
    [suggestion],
  );

  if (!rows[0]) return null;
  return rows[0];
};

const removeLikeDB = async (id) => {
  const { rows } = await query(
    'UPDATE suggestions SET likes = likes - 1 WHERE sg_id = $1 RETURNING *;',
    [id],
  );

  if (rows[0]) return rows;
  return false;
};

const removeDislikeDB = async (id) => {
  const { rows } = await query(
    `UPDATE suggestions SET dislikes = dislikes - 1 WHERE sg_id = $1 RETURNING *;`,
    [id],
  );

  if (!rows[0]) return null;
  return rows[0];
};

export {
  getSuggestionsDB,
  addLikeDB,
  addDislikeDB,
  addSuggestionDB,
  removeLikeDB,
  removeDislikeDB,
};
