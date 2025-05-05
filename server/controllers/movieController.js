import Movie from '../models/Movie';

export const createMovie = async (req, res) => {
  try {
    const movie = new Movie({
      ...req.body,
      createdBy: req.user.id
    });
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find()
      .populate('showtimes.theater', 'name location')
      .sort({ createdAt: -1 });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};