export default function TheRecomendedCard({ sushi }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={sushi.img}
        alt={sushi.name}
        className="w-full h-full rounded-lg"
      />
      <h1 className="mt-2 text-base font-medium">{sushi.name}</h1>
      <strong className="text-red-600">
        {sushi.price} {sushi.curr}
      </strong>
      <button className="text-white bg-red-600 p-2 rounded-md text-sm font-bold">
        Adauga in cos
      </button>
    </div>
  );
}
