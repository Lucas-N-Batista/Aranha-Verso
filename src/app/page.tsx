import HeroesList from "@/components/HeroesList";
import { IHeroData } from "@/Interfaces/heroes";

import styles from "./page.module.scss";

async function getHeroesData(): Promise<IHeroData[]> {
  try {
    const res = await fetch("http://localhost:3000/api/heroes", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Falha ao buscar heróis: ${res.status}`);
    }

    const json = await res.json();

    // Garanta que data é um array
    if (!json.data || !Array.isArray(json.data)) {
      console.error("Resposta inválida da API:", json);
      return [];
    }

    return json.data;
  } catch (error) {
    console.error("Erro ao buscar heróis:", error);
    throw error;
  }
}

export default async function Home() {
  const heroes = await getHeroesData();

  if (!heroes || heroes.length === 0) {
    return (
      <main className={styles.main}>
        <p>Nenhum herói encontrado</p>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes} />
    </main>
  );
}
