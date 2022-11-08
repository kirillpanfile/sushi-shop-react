import { useOnMounted, useComputed } from "../../hooks";
import { useState } from "react";
import TheRecomendedCard from "./TheRecomendedCard";
export default function TheRecomended(props) {
  // TODO : De transcris cu redux - ele o sa fie globale
  const [sushi, setSushi] = useState([]);

  useOnMounted(() => {
    fetch("http://localhost:3001/recommended-sushi")
      .then((res) => res.json())
      .then((data) => setSushi(data));
  });

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="mr-auto font-bold text-lg">Produse recomandate</h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-4">
        {sushi.map((sushi) => {
          return <TheRecomendedCard key={sushi.id} sushi={sushi} />;
        })}
      </div>
    </section>
  );
}
