import { EMBED_URL } from '../config';

// ----------------------------------------------------------------------

const embedMovie = (id) => `${EMBED_URL}=${id}`;

const embedEpisode = (id, season, episode) =>

`https://2embed.org/embed/series?tmdb=${id}&sea=${season}&epi=${episode}`;

export { embedMovie, embedEpisode };










