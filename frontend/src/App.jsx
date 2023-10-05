import { useEffect, useState } from "react";
import Rating from "./Rating";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const getJokesData = async () => {
      const res = await fetch("/api");
      const data = await res.json();
      setJokes(data);
    };
    getJokesData();
  }, []);
  return (
    <div className="app bg-slate-600 text-zinc-100 flex flex-col p-10 items-center">
      <h1 className="text-5xl font-semibold pb-5">Random jokes</h1>
      <ul className="jokes-container flex flex-wrap gap-3 items-center justify-center pt-5">
        {jokes.map((joke) => (
          <li
            key={joke.id}
            className="flex flex-col gap-3 border p-3 rounded hover:bg-zinc-50/10 cursor-default w-96 h-48"
          >
            <div className="flex items-center gap-2" title="category">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-300"></span>
              <span className="text-sm">{joke.category}</span>
            </div>
            <h3 className="text-xl font-medium ">{joke.title}</h3>
            <p>{joke.content}</p>
            <Rating rating={joke.rating} id={joke.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
