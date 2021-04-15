import Link from 'next/link';
import { ICharacter } from '../../types';

import s from './Person.module.scss';

type Props = {
  person: ICharacter;
};

export function Person({ person }: Props): JSX.Element {
  return (
    <div className={s.person}>
      <h1 className={s.person__title}>{person.name}</h1>
      <h3 className={s.person__subTitle}>Birth year:</h3>
      <p className={s.person__para}>{person.birthYear}</p>
      <h3 className={s.person__subTitle}>Eye color:</h3>
      <p className={s.person__para}>{person.eyeColor}</p>
      <h3 className={s.person__subTitle}>Hair color:</h3>
      <p className={s.person__para}>{person.hairColor}</p>
      <h3 className={s.person__subTitle}>Height:</h3>
      <p className={s.person__para}>{person.height} cm</p>
      <h3 className={s.person__subTitle}>Mass:</h3>
      <p className={s.person__para}>{person.mass} kg</p>
      <Link href="/characters">Back to characters</Link>
    </div>
  );
}
