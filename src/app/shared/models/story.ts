import { Auteur } from './auteur';
import { StoryCategories } from './story-categories.enum';

export interface Story {
  id: Number;
  titre: string;
  imagestory: string;
  auteur: Partial<Auteur>;
  description: string;
  contenuHistoire?: string;
  categorie: StoryCategories;
}
