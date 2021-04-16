import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Characters } from '../../components/characters/Characters';

import { Layout } from '../../components/layout/Layout';
import { fetchCharacters } from '../../lib/swapi';
import { IPeopleResponse } from '../../types';

import s from '../../components/characters/Characters.module.scss';

export type PageProps = {
  peopleResponse: IPeopleResponse;
};

export default function PageComponent(
  data: InferGetServerSidePropsType<typeof getServerSideProps>,
): JSX.Element {
  const { peopleResponse } = data;

  return (
    <Layout>
      <Head>
        <title>Star Wars characters</title>
      </Head>
      <h1 className={s.characters__header}>Star Wars characters</h1>
      <Characters peopleResponse={peopleResponse} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  let peopleResponse = null;

  const result = await fetchCharacters();

  peopleResponse = result;

  return {
    props: {
      peopleResponse,
    },
  };
};
