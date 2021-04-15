import Link from 'next/link';
import { IFilm } from '../../types';

import s from './Film.module.scss';

type Props = {
  film: IFilm;
};

export function Film({ film }: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        Episode {film.episodeID}: {film.title}
      </h2>
      <p className={s.film__openingCrawl}>
        {film.openingCrawl}
      </p>
      <h3 className={s.film__subTitle}>
        Characters
      </h3>
        {film.characterConnection.characters.map((character, i) => (
        <p key={i}>
          <Link href={`/characters/${character.id}`}>{character.name}</Link>
        </p>
        ))}
    </section>
  );
}
