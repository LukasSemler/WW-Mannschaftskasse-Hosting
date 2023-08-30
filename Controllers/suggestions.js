import {
  getSuggestionsDB,
  addLikeDB,
  addDislikeDB,
  addSuggestionDB,
  removeLikeDB,
  removeDislikeDB,
} from '../Models/suggestions.js';

const getSuggestions = async (req, res) => {
  const result = await getSuggestionsDB();
  if (result) res.status(200).json(result);
  else res.status(404).json({ message: 'Not found' });
};

const addLike = async (req, res) => {
  const { id } = req.params;
  const result = await addLikeDB(id);
  if (result) res.status(200).json(result);
  else res.status(404).json({ message: 'Not found' });
};

const addDislike = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const result = await addDislikeDB(id);
  if (result) res.status(200).json(result);
  else res.status(404).json({ message: 'Not found' });
};

const addSuggestion = async (req, res) => {
  const { suggestion } = req.body;
  const result = await addSuggestionDB(suggestion);
  if (result) res.status(200).json(result);
  else res.status(404).json({ message: 'Not found' });
};

const removeLike = async (req, res) => {
  const { id } = req.params;
  const result = await removeLikeDB(id);
  if (result) res.status(200).json(result);
  else res.status(404).json({ message: 'Not found' });
};

const removeDislike = async (req, res) => {
  const { id } = req.params;
  const result = await removeDislikeDB(id);
  if (result) res.status(200).json(result);
  else res.status(404).json({ message: 'Not found' });
};

export { getSuggestions, addLike, addDislike, addSuggestion, removeLike, removeDislike };
