import { Injectable } from "@angular/core";
import { HeroInfo } from "../../models/heroInfo";

@Injectable({
    providedIn:'root'
}) export class HeroService{
    getHeroBannerInfo() : HeroInfo[]{
        const heroInfos : HeroInfo[] = 
        [
            {
                titre: " Le role de la femme dans la societe ",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore aut quam temporibus corrupti laudantium sint libero pariatur, non culpa, quae repellat beatae",
                image:"/assets/img/logo_site.png",   
                lien:""
            },
            {
                titre: " Le doight de Dieu ",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore aut quam temporibus corrupti laudantium sint libero pariatur, non culpa, quae repellat beatae",
                image:"/assets/img/films.png",   
                lien:"" 
            },
            {
                titre: " Qu'est ce que le lazy loading ",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore aut quam temporibus corrupti laudantium sint libero pariatur, non culpa, quae repellat beatae",
                image:"/assets/img/ijurizk8.png",   
                lien:"" 
            },
            {
                titre: " Tout sur Narrotu ",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore aut quam temporibus corrupti laudantium sint libero pariatur, non culpa, quae repellat beatae",
                image:"/assets/img/img1.png",   
                lien:"" 
            },
            {
                titre: " Tout sur Sangoghu ",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore aut quam temporibus corrupti laudantium sint libero pariatur, non culpa, quae repellat beatae",
                image:"/assets/img/tgm8kdzl.png",   
                lien:"" 
            }
        ]
        return heroInfos;
    }
}