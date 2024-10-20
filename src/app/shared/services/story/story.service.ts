import { Injectable } from '@angular/core';
import { Story } from '../../models/story';
import { Auteur } from '../../models/auteur';
import { StoryCategories } from '../../models/story-categories.enum';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  constructor() {}
  getStoriesOverview(): Story[] {
    const stories: Story[] = [
      {
        id: 1,
        titre: 'Les Misérables',
        imagestory:
          '/assets/images-herobanner/aaron-burden-4eWwSxaDhe4-unsplash.jpg',
        auteur: 'Victor Hugo' as Partial<Auteur>,
        description:
          "Un classique de la littérature française qui raconte l'histoire de rédemption de Jean Valjean.",
        categorie: StoryCategories.ContesLegendes,
      },
      {
        id: 2,
        titre: '1984',
        imagestory:
          '/assets/images-herobanner/aaron-burden-4eWwSxaDhe4-unsplash.jpg',
        auteur: 'George Orwell' as Partial<Auteur>,
        description:
          'Un roman dystopique sur la surveillance de masse et le contrôle de la pensée dans une société totalitaire.',
        categorie: StoryCategories.ContesLegendes,
      },
      {
        id: 3,
        titre: 'Moby Dick',
        imagestory:
          '/assets/images-herobanner/aaron-burden-4eWwSxaDhe4-unsplash.jpg',
        auteur: 'Herman Melville' as Partial<Auteur>,
        description:
          "L'épopée d'un capitaine de baleinier obsédé par la chasse d'un cachalot blanc.",
        categorie: StoryCategories.Comedie,
      },
      {
        id: 4,
        titre: 'Le Petit Prince',
        imagestory:
          '/assets/images-herobanner/aaron-burden-4eWwSxaDhe4-unsplash.jpg',
        auteur: 'Antoine de Saint-Exupéry' as Partial<Auteur>,
        description:
          "Un conte philosophique poétique sur l'amour, l'amitié et la quête de sens dans l'univers.",
        categorie: StoryCategories.ContesLegendes,
      },
      {
        id: 5,
        titre: 'Crime et Châtiment',
        imagestory:
          '/assets/images-herobanner/aaron-burden-4eWwSxaDhe4-unsplash.jpg',
        auteur: 'Fiodor Dostoïevski' as Partial<Auteur>,
        description:
          "Un roman qui explore la conscience morale à travers l'histoire d'un homme qui commet un meurtre.",
        categorie: StoryCategories.HistoireAmour,
      },
      {
        id: 6,
        titre: "L'Étranger",
        imagestory:
          '/assets/images-herobanner/aaron-burden-4eWwSxaDhe4-unsplash.jpg',
        auteur: 'Albert Camus' as Partial<Auteur>,
        description:
          "L'histoire de Meursault, un homme détaché qui commet un meurtre absurde et traverse son procès avec indifférence.",
        categorie: StoryCategories.Historique,
      },
      {
        id: 7,
        titre: 'Don Quichotte',
        imagestory:
          '/assets/images-herobanner/aaron-burden-4eWwSxaDhe4-unsplash.jpg',
        auteur: 'Miguel de Cervantes' as Partial<Auteur>,
        description:
          'Les aventures du chevalier errant Don Quichotte, qui se bat contre des moulins à vent et rêve de gloire chevaleresque.',
        categorie: StoryCategories.Inspiration,
      },
      {
        id: 8,
        titre: 'Fahrenheit 451',
        imagestory:
          '/assets/images-herobanner/aaron-burden-4eWwSxaDhe4-unsplash.jpg',
        auteur: 'Ray Bradbury' as Partial<Auteur>,
        description:
          'Dans un futur dystopique, les pompiers brûlent les livres dans une société qui craint la connaissance.',
        categorie: StoryCategories.ScienceFiction,
      },
      {
        id: 9,
        titre: 'La Métamorphose',
        imagestory:
          '/assets/images-herobanner/aaron-burden-4eWwSxaDhe4-unsplash.jpg',
        auteur: 'Franz Kafka' as Partial<Auteur>,
        description:
          "Le récit d'un homme qui se réveille transformé en insecte géant, symbolisant l'isolement et la désintégration sociale.",
        categorie: StoryCategories.Fantastique,
      },
      {
        id: 10,
        titre: 'Madame Bovary',
        imagestory:
          '/assets/images-herobanner/aaron-burden-4eWwSxaDhe4-unsplash.jpg',
        auteur: 'Gustave Flaubert' as Partial<Auteur>,
        description:
          "Un roman réaliste qui suit la vie d'Emma Bovary, une femme insatisfaite de son mariage et de sa vie provinciale.",
        categorie: StoryCategories.AventuresEpiques,
      },
    ];
    return stories;
  }
}
