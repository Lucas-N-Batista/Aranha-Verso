import { IHeroData } from "@/Interfaces/heroes";
import Carousel from "@/components/carousel";

interface IProps {
  params: {
    id: string;
  };
}

async function getHeroesData(): Promise<IHeroData[]> {
  try {
    const res = await fetch("http://localhost:3000/api/heroes", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Falha ao buscar heróis: ${res.status}`);
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Erro ao buscar heróis:", error);
    return [];
  }
}

export default async function Hero({ params: { id } }: IProps) {
  const heroes = await getHeroesData();

  if (!heroes || heroes.length === 0) {
    return <div>Nenhum herói encontrado</div>;
  }

  return <Carousel heroes={heroes} activeId={id} />;
}
