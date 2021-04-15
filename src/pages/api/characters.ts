import { NextApiRequest, NextApiResponse } from 'next';
import { fetchCharacters } from '../../lib/swapi';
import { IPeopleResponse } from '../../types';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const after = req.query?.after as string | null;
  const result: IPeopleResponse = await fetchCharacters(after ?? undefined);
  if (result.allPeople.people.length === 0) {
    res.status(400).end();
  } else {
    res.status(200).json(result);
  }
};
