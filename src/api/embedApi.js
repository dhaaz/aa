import { EMBED_URL } from '../config';

// ----------------------------------------------------------------------

const embedMovie = (id) => `${EMBED_URL}/movie?imdb=${id}`;
const embedEpisode = (id, season, episode) =>
  `${EMBED_URL}/series?imdb=${id}&sea=${season}$epi=${episode}`;

export { embedMovie, embedEpisode };
