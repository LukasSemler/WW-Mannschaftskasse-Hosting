import { getPaymentTypeDB, getSumTypeDB } from '../Models/stats.js';

const getPaymentType = async (req, res) => {
  const result = await getPaymentTypeDB();
  if (result) res.status(200).json(result);
  else res.status(404).json({ message: 'Not found' });
};

const getSumType = async (req, res) => {
  const result = await getSumTypeDB();
  if (result) res.status(200).json(result);
  else res.status(404).json({ message: 'Not found' });
};

export { getPaymentType, getSumType };
