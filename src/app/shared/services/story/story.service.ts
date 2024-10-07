import { Injectable } from '@angular/core';
import { Story } from '../../models/story';
import { Auteur } from '../../models/auteur';

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
        imagestory: '/assets/img/acc1.png',
        auteur: 'Victor Hugo' as Partial<Auteur>,
        description:
          "Un classique de la littérature française qui raconte l'histoire de rédemption de Jean Valjean.",
      },
      {
        id: 2,
        titre: '1984',
        imagestory: '/assets/img/acceuil.png',
        auteur: 'George Orwell' as Partial<Auteur>,
        description:
          'Un roman dystopique sur la surveillance de masse et le contrôle de la pensée dans une société totalitaire.',
      },
      {
        id: 3,
        titre: 'Moby Dick',
        imagestory: 'src/assets/img/dyb57lmi.png',
        auteur: 'Herman Melville' as Partial<Auteur>,
        description:
          "L'épopée d'un capitaine de baleinier obsédé par la chasse d'un cachalot blanc.",
      },
      {
        id: 4,
        titre: 'Le Petit Prince',
        imagestory: '/assets/img/films.png',
        auteur: 'Antoine de Saint-Exupéry' as Partial<Auteur>,
        description:
          "Un conte philosophique poétique sur l'amour, l'amitié et la quête de sens dans l'univers.",
      },
      {
        id: 5,
        titre: 'Crime et Châtiment',
        imagestory: '/assets/img/ijurizk8.png',
        auteur: 'Fiodor Dostoïevski' as Partial<Auteur>,
        description:
          "Un roman qui explore la conscience morale à travers l'histoire d'un homme qui commet un meurtre.",
      },
      {
        id: 6,
        titre: "L'Étranger",
        imagestory: '/assets/img/tgm8kdzl.png',
        auteur: 'Albert Camus' as Partial<Auteur>,
        description:
          "L'histoire de Meursault, un homme détaché qui commet un meurtre absurde et traverse son procès avec indifférence.",
      },
      {
        id: 7,
        titre: 'Don Quichotte',
        imagestory: '/assets/img/xw3y1o27.png',
        auteur: 'Miguel de Cervantes' as Partial<Auteur>,
        description:
          'Les aventures du chevalier errant Don Quichotte, qui se bat contre des moulins à vent et rêve de gloire chevaleresque.',
      },
      {
        id: 8,
        titre: 'Fahrenheit 451',
        imagestory: '/assets/img/vwioejmi.png',
        auteur: 'Ray Bradbury' as Partial<Auteur>,
        description:
          'Dans un futur dystopique, les pompiers brûlent les livres dans une société qui craint la connaissance.',
      },
      {
        id: 9,
        titre: 'La Métamorphose',
        imagestory: '/assets/img/vql36eeb.png',
        auteur: 'Franz Kafka' as Partial<Auteur>,
        description:
          "Le récit d'un homme qui se réveille transformé en insecte géant, symbolisant l'isolement et la désintégration sociale.",
      },
      {
        id: 10,
        titre: 'Madame Bovary',
        imagestory: '/assets/img/xw3y1o27.png',
        auteur: 'Gustave Flaubert' as Partial<Auteur>,
        description:
          "Un roman réaliste qui suit la vie d'Emma Bovary, une femme insatisfaite de son mariage et de sa vie provinciale.",
      },
    ];
    return stories;
  }
}
