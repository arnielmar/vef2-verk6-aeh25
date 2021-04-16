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
      <div className={s.film__row}>
        <div className={s.film__colOne}>
          <p className={s.film__openingCrawl}>
            {film.openingCrawl}
          </p>
        </div>
        <div className={s.film__colTwo}>
          <h3 className={s.film__subTitle}>
            Characters
          </h3>
          <div className={s.film__characters}>
            {film.characterConnection.characters.map((character, i) => (
              <p key={i} className={s.film__character}>
                <Link href={`/characters/${character.id}`}>{character.name}</Link>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
