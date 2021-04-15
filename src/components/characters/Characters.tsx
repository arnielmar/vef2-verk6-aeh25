import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import s from './Characters.module.scss';
import { Button } from '../button/Button';
import { ICharacter, IPeopleResponse } from '../../types';

type Props = {
  peopleResponse: IPeopleResponse;
};

export function Characters({ peopleResponse }: Props): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  const [characters, setCharacters] = useState<Array<ICharacter>>([]);

  const [nextPage, setNextPage] = useState<string | undefined>(undefined);

  useEffect(() => {
    setCharacters(peopleResponse.allPeople.people);
    setNextPage(peopleResponse?.allPeople?.pageInfo?.endCursor);
  });

  const fetchMore = async (): Promise<void> => {
    setLoading(true);
    if (nextPage) {
      const res = (await fetch(`/api/characters?after=${nextPage}`));
      if (res.ok) {
        const peopleResponse: IPeopleResponse = await res.json();
        const moreCharacters = peopleResponse.allPeople.people;
        const nextCursor = peopleResponse.allPeople.pageInfo.endCursor;
        await setCharacters(characters.concat(moreCharacters));
        await setNextPage(nextCursor);
      }
    }

    setLoading(false);
  };

  return (
    <section className={s.characters}>
      <ul className={s.characters__list}>
        {characters.map((char, i) => (
          <li key={i}>
            <Link href={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>

      <Button disabled={loading} onClick={fetchMore}>Fetch more</Button>
    </section>
  );
}
