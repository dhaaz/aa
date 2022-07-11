import { EMBED_URL } from 'src/config';

// ----------------------------------------------------------------------

const embedMovie = (id) => `${EMBED_URL}/${id}`;
const embedEpisode = (id, season, episode) =>
  `${EMBED_URL}/${id}/${season}/${episode}`;

export { embedMovie, embedEpisode };
