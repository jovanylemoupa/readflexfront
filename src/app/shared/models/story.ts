import { Auteur } from './auteur';

export interface Story {
  id: Number;
  titre: string;
  imagestory: string;
  auteur: Partial<Auteur>;
  description: string;
  contenuHistoire?: string;
}
