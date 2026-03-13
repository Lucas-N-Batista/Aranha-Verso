import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.API_URL;

  if (!baseUrl) {
    return NextResponse.json(
      { error: "API_URL não configurada" },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(`${baseUrl}/heros`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Erro na API externa: ${res.status}` },
        { status: res.status },
      );
    }

    const externalData = await res.json();

    // ✅ CORREÇÃO: Envolver em { data: [...] }
    return NextResponse.json({
      data: Array.isArray(externalData) ? externalData : [],
    });
  } catch (e) {
    console.error("Erro ao buscar heróis:", e);
    return NextResponse.json(
      { error: "Erro interno ao buscar heróis" },
      { status: 500 },
    );
  }
}
