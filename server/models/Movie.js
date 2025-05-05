import mongoose from 'mongoose';

const showtimeSchema = new mongoose.Schema({
  theater: { type: mongoose.Schema.Types.ObjectId, ref: 'Theater' },
  time: { type: Date, required: true },
  availableSeats: { type: Number, required: true }
}, { _id: false });

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  genre: { type: [String], required: true },
  rating: { type: Number, min: 0, max: 10 },
  showtimes: [showtimeSchema],
  posterUrl: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Movie', movieSchema);