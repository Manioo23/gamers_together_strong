export type GameType = {
    id: string,
    name: string,
    description: string,
    imgUrl: string,
    genre: GenreType,
    users: Array<UserType>,
}

export type GenreType = {
    id: string,
    name: string,
    games: string,
}

export type UserType = {
    id: string,
    username: string,
    description: string,
    discordName: string,
    imgUrl: string,
    games: Array<GameType>,
}