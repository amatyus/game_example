import {
  CategoryField,
  PlatformField,
  SortByField
} from '../../api/freeToGameApi'

export const allPlatforms: {value: PlatformField; name: string}[] = [
  {name: 'PC', value: 'pc'},
  {name: 'Browser', value: 'browser'},
  {name: 'All', value: 'all'}
]

export const allCategory: {value: CategoryField; name: string}[] = [
  {name: 'All', value: 'all'},
  {name: 'Mmorpg', value: 'mmorpg'},
  {name: 'Shooter', value: 'shooter'},
  {name: 'Strategy', value: 'strategy'},
  {name: 'Moba', value: 'moba'},
  {name: 'Racing', value: 'racing'},
  {name: 'Sports', value: 'sports'},
  {name: 'Social', value: 'social'},
  {name: 'Sandbox', value: 'sandbox'},
  {name: 'Open-world', value: 'open-world'},
  {name: 'Survival', value: 'survival'},
  {name: 'Pvp', value: 'pvp'},
  {name: 'Pve', value: 'pve'},
  {name: 'Pixel', value: 'pixel'},
  {name: 'Voxel', value: 'voxel'},
  {name: 'Zombie', value: 'zombie'},
  {name: 'Pvturn-basedp', value: 'turn-based'},
  {name: 'First-person', value: 'first-person'},
  {name: 'Third-Person', value: 'third-Person'},
  {name: 'Top-down', value: 'top-down'},
  {name: 'Tank', value: 'tank'},
  {name: 'Space', value: 'space'},
  {name: 'Sailing', value: 'sailing'},
  {name: 'Side-scroller', value: 'side-scroller'},
  {name: 'Superhero', value: 'superhero'},
  {name: 'Permadeath', value: 'permadeath'},
  {name: 'Card', value: 'card'},
  {name: 'Battle-royale', value: 'battle-royale'},
  {name: 'Mmo', value: 'mmo'},
  {name: 'Mmofps', value: 'mmofps'},
  {name: '3d', value: '3d'},
  {name: '2d', value: '2d'},
  {name: 'Anime', value: 'anime'},
  {name: 'Fantasy', value: 'fantasy'},
  {name: 'Sci-fi', value: 'sci-fi'},
  {name: 'Mmotps', value: 'mmotps'},
  {name: 'Fighting', value: 'fighting'},
  {name: 'Action-rpg', value: 'action-rpg'},
  {name: 'Action', value: 'action'},
  {name: 'Military', value: 'military'},
  {name: 'Martial-arts', value: 'martial-arts'},
  {name: 'Flight', value: 'flight'},
  {name: 'Low-spec', value: 'low-spec'},
  {name: 'Tower-defense', value: 'tower-defense'},
  {name: 'Horror', value: 'horror'},
  {name: 'Mmorts', value: 'mmorts'}
]

export const allSortBy: {value: SortByField; name: string}[] = [
  {name: 'Release-date', value: 'release-date'},
  {name: 'Popularity', value: 'popularity'},
  {name: 'Alphabetical', value: 'alphabetical'},
  {name: 'Relevance', value: 'relevance'}
]
