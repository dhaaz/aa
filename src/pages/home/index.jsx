import React, { useEffect } from 'react';
// components
import Page from '../../components/page';
import { MovieList } from '../../modules/movies';
import { HomeBanner } from '../../components/banner';
// api
import { category, movieType } from '../../api';
import { handleScrollToTop } from '../../utils';

// ----------------------------------------------------------------------

export default function Home() {
  useEffect(() => {
    handleScrollToTop();
  }, []);

  return (
    <Page title="Home">
      <HomeBanner />
      <div className="w-full mt-812:w-11/12 mx-auto">
        <MovieList
          category={category.movie}
          type={movieType.trending}
          title="FILM TRENDING"
        />
        <MovieList
          category={category.movie}
          type={movieType.popular}
          title="FILM TERPOPULER"
        />
        <MovieList
          category={category.movie}
          type={movieType.top_rated}
          title="FILM RATING TERTINGGI"
        />
        <MovieList category={category.tv} type={movieType.trending} title="SERIES TRENDING" />
        <MovieList category={category.tv} type={movieType.popular} title="SERIES TERPOPULER" />
        <MovieList
          category={category.tv}
          type={movieType.top_rated}
          title="SERIES RATING TERTINGGI"
        />
      </div>
    </Page>
  );
};
