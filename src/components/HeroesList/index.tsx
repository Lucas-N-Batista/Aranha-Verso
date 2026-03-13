import { IHeroData } from "@/Interfaces/heroes";
import HeroesListClient from "@/components/HeroesList/HeroesListClient";

import styles from "./heroesList.module.scss";

interface HeroesListProps {
  heroes: IHeroData[];
}

export default function HeroesList({ heroes }: HeroesListProps) {
  if (!heroes || heroes.length === 0) {
    return <div className={styles.empty}>Nenhum personagem encontrado</div>;
  }

  return (
    <>
      <h1 className={styles.title}>Personagens</h1>
      <HeroesListClient heroes={heroes} />
    </>
  );
}
