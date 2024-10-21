import { Story } from './story';

export interface Categorie
{
    id: Number;
    name: string;
    storys: Partial<Story[]>;
}
