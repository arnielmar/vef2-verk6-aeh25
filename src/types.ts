// Týpur sem við skilgreinum á móti endapunkti

export type IPerson = {
  person: ICharacter
}

export interface ICharacter {
  id: string;
  name?: string;
  birthYear?: string;
  eyeColor?: string;
  hairColor?: string;
  height?: number;
  mass?: number;
}

export interface IFilms {
  allFilms: {
    films: [
      IFilm
    ]
  }
}

export interface IFilm {
  title?: string;
  episodeID?: number;
  openingCrawl?: string;
  characterConnection: {
    characters: ICharacter[];
  }
}

export interface IPaging {
  hasNextPage: boolean;
  endCursor?: string;
}

export interface IPeopleResponse {
  allPeople: {
    pageInfo: IPaging;
    people: ICharacter[];
  }
}
