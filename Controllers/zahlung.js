import {
  spielerZahlungBekommenDB,
  spielerZahlungErstellenDB,
  spielerZahlungLoeschenDB,
  spielerZahlungBezahlenDB,
  getAusgabenDB,
  postAusgabenDB,
} from '../Models/zahlung.js';

//Zahlung von Spieler bekommen
const spielerZahlungBekommenController = async (req, res) => {
  //Spieler in DB löschen
  const dbResult = await spielerZahlungBekommenDB();

  //Löschstatus ausgeben
  if (dbResult) return res.status(200).json(dbResult);
  return res
    .status(400)
    .send('Beim bekommen der Zahlungen eines Spielers ist ein Fehler aufgetreten!');
};

//Zahlung von Spieler erstellen
const spielerZahlungErstellenController = async (req, res) => {
  //Spieler in DB löschen
  const dbResult = await spielerZahlungErstellenDB(req.body);

  //Löschstatus ausgeben
  if (dbResult) return res.status(200).json(dbResult);
  return res
    .status(400)
    .send('Beim erstellen einer Zahlungen für einen Spieler ist ein Fehler aufgetreten!');
};

//Zahlung von Spieler löschen
const spielerZahlungLoeschenController = async (req, res) => {
  const { z_id } = req.params;
  //Spieler in DB löschen
  const dbResult = await spielerZahlungLoeschenDB(z_id);

  //Löschstatus ausgeben
  if (dbResult) return res.status(200).json(dbResult);
  return res
    .status(400)
    .send('Beim Löschen einer Zahlungen für einen Spieler ist ein Fehler aufgetreten!');
};

//Zahlung von Spieler löschen
const spielerZahlungBezahlenController = async (req, res) => {
  const { z_id } = req.params;
  //Spieler in DB löschen
  const dbResult = await spielerZahlungBezahlenDB(z_id, req.body);

  //Löschstatus ausgeben
  if (dbResult) return res.status(200).json(dbResult);
  return res
    .status(400)
    .send(
      'Beim setzen auf "Bezahlt" einer Zahlungen für einen Spieler ist ein Fehler aufgetreten!',
    );
};

const getAusgabenController = async (req, res) => {
  const result = await getAusgabenDB();

  if (result) return res.status(200).json(result);
  return res.status(400).send('Beim bekommen ist ein Fehler aufgetreten!');
};

const postAusgabenController = async (req, res) => {
  const { amount, reason } = req.body;

  const result = await postAusgabenDB(amount, reason);

  if (result) return res.status(200).json(result);
  return res.status(400).send('Beim posten der Ausgaben ist ein Fehler aufgetreten!');
};

export {
  spielerZahlungBekommenController,
  spielerZahlungErstellenController,
  spielerZahlungBezahlenController,
  spielerZahlungLoeschenController,
  getAusgabenController,
  postAusgabenController,
};
