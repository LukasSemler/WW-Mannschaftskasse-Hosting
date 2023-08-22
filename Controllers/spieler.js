import {
  testDB,
  spielerBekommenDB,
  spielerErstellenDB,
  spielerLoeschenDB,
  loginDB,
} from '../Models/spieler.js';

//Test-Controller
const testController = async (req, res) => {
  const result = await testDB();

  if (result) return res.status(200).json(result);

  return res.status(400).send('Keine Datenbankverbindung möglich');
};

const spielerBekommenController = async (req, res) => {
  //Spieler aus DB bekommen
  const dbResult = await spielerBekommenDB();

  //Erstellstatus ausgeben
  if (dbResult) return res.status(200).json(dbResult);
  return res.status(400).send('Beim bekommen der Spieler ist ein Fehler aufgetreten!');
};

//Spieler erstellen
const spielerErstellenController = async (req, res) => {
  const spielerData = req.body;
  console.log(spielerData);

  //Spieler in DB anlegen
  const dbResult = await spielerErstellenDB(spielerData);

  //Erstellstatus ausgeben
  if (dbResult) return res.status(200).json(dbResult);
  return res.status(400).send('Beim Erstellen des Spielers ist ein Fehler aufgetreten!');
};

//Spieler löschen
const spielerLoeschenController = async (req, res) => {
  const { id } = req.params;
  console.log(`ID: ${id}`);

  //Spieler in DB löschen
  const dbResult = await spielerLoeschenDB(id);

  //Löschstatus ausgeben
  if (dbResult) return res.status(200).json(dbResult);
  return res.status(400).send('Beim Löschen des Spielers ist ein Fehler aufgetreten!');
};

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const result = await loginDB(email, password);
  if (result) return res.status(200).json(result);
  return res.status(400).send('Beim Login ist ein Fehler aufgetreten!');
};

export {
  testController,
  spielerBekommenController,
  spielerErstellenController,
  spielerLoeschenController,
  loginController,
};
