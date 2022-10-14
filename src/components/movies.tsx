import { HeartStraight } from "phosphor-react";
import { AiTwotoneStar } from "react-icons/ai";
interface MoviesListProps {
  id: number;
  genre_ids: number[];
  title: string;
  release_date: string;
  poster_path: string;
}

type MoviesListResponse = {
  moviesData: MoviesListProps[];
};

export function Movies({ moviesData }: MoviesListResponse) {
  return (
    <section>
      <ul className="max-w-7xl w-full py-8 px-4 mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {moviesData.map((movies) => (
          <li className="mx-auto rounded-lg overflow-hidden cursor-pointer" key={movies.id}>
            <div className="shadow-sm relative shadow-yellow-500">
              <HeartStraight
                className="absolute top-4 right-4"
                size={32}
                color="red"
              />
            </div>
            <img src={process.env.NEXT_PUBLIC_API_IMAGE + movies.poster_path} />
            <div className="flex flex-col items-center pt-2 border-x  border-gray-light-200 gap-2 w-full">
              <h3 className="font-bold text-center h-10">{movies.title}</h3>
              <div className="flex items-center gap-2">
                <AiTwotoneStar />
                <span>7</span>
                <p>Gênero</p>
              </div>
              <div>R$ 79,99</div>
              <button className="w-full rounded-b-md h-10 text-[#fff] bg-purple-dark-600">Adicionar</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
