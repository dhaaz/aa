import { EMBED_URL } from '../config';

// ----------------------------------------------------------------------

const embedMovie = (id) => `${EMBED_URL}=${id}`;
const embedEpisode = (id, season, episode) =>
  `${EMBED_URL}=${id}&sea={season}&epi=${episode}`;

export { embedMovie, embedEpisode };
