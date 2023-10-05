import express from "express";

const app = express();

const port = 3000;

// 20 random jokes
const jokes = [
  {
    id: 1,
    title: "Dad Joke",
    content:
      "Why don't scientists trust atoms? Because they make up everything.",
    category: "Puns",
    rating: 4.5,
    isFunny: true,
  },
  {
    id: 2,
    title: "Knock Knock",
    content:
      "Knock, knock. Who’s there? Lettuce. Lettuce who? Lettuce in, it’s cold out here!",
    category: "Knock Knock",
    rating: 3.8,
    isFunny: true,
  },
  {
    id: 3,
    title: "Programming Joke",
    content:
      "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    category: "Programming",
    rating: 4.2,
    isFunny: true,
  },
  {
    id: 4,
    title: "Math Joke",
    content:
      "Parallel lines have so much in common. It's a shame they'll never meet.",
    category: "Math",
    rating: 4.0,
    isFunny: true,
  },
  {
    id: 5,
    title: "Animal Joke",
    content: "Why did the chicken join a band? Because it had the drumsticks!",
    category: "Animals",
    rating: 3.9,
    isFunny: true,
  },
  {
    id: 6,
    title: "Doctor Joke",
    content:
      "Why did the doctor carry a red pen? In case they needed to draw blood!",
    category: "Medical",
    rating: 3.5,
    isFunny: true,
  },
  {
    id: 7,
    title: "Technology Joke",
    content:
      "Why do computer scientists confuse Christmas and Halloween? Because Oct 31 == Dec 25.",
    category: "Technology",
    rating: 4.1,
    isFunny: true,
  },
  {
    id: 8,
    title: "Science Joke",
    content:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    category: "Science",
    rating: 4.3,
    isFunny: true,
  },
  {
    id: 9,
    title: "Food Joke",
    content: "What do you call cheese that isn't yours? Nacho cheese!",
    category: "Food",
    rating: 3.7,
    isFunny: true,
  },
  {
    id: 10,
    title: "Gardening Joke",
    content:
      "Why don't scientists trust atoms? Because they make up everything.",
    category: "Gardening",
    rating: 4.0,
    isFunny: true,
  },
  {
    id: 11,
    title: "Office Joke",
    content:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
    category: "Office",
    rating: 3.6,
    isFunny: true,
  },
  {
    id: 12,
    title: "Music Joke",
    content:
      "Why did the musician break up with metronome? Because it couldn't keep up!",
    category: "Music",
    rating: 4.4,
    isFunny: true,
  },
  {
    id: 13,
    title: "Space Joke",
    content: "How do you organize a space party? You 'planet'!",
    category: "Space",
    rating: 4.2,
    isFunny: true,
  },
  {
    id: 14,
    title: "Sports Joke",
    content: "Why don't skeletons fight each other? They don't have the guts!",
    category: "Sports",
    rating: 3.9,
    isFunny: true,
  },
  {
    id: 15,
    title: "Weather Joke",
    content:
      "What did one raindrop say to the other? Two’s company, three’s a cloud!",
    category: "Weather",
    rating: 3.8,
    isFunny: true,
  },
  {
    id: 16,
    title: "School Joke",
    content:
      "What do you call a snowman with a six-pack? An abdominal snowman!",
    category: "School",
    rating: 4.1,
    isFunny: true,
  },
  {
    id: 17,
    title: "Travel Joke",
    content:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
    category: "Travel",
    rating: 3.7,
    isFunny: true,
  },
  {
    id: 18,
    title: "Holiday Joke",
    content:
      "What do you call a snowman with a six-pack? An abdominal snowman!",
    category: "Holidays",
    rating: 4.3,
    isFunny: true,
  },
  {
    id: 19,
    title: "Finance Joke",
    content:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    category: "Finance",
    rating: 4.0,
    isFunny: true,
  },
  {
    id: 20,
    title: "History Joke",
    content: "Why don't skeletons fight each other? They don't have the guts!",
    category: "History",
    rating: 3.5,
    isFunny: true,
  },
];

app.get("/api", (req, res) => {
  res.send(jokes);
});

app.get("/api/puns", (req, res) => {
  const filteredJokes = jokes.filter((joke) => joke.category === "Puns");

  res.send(filteredJokes);
});

app.listen(port, () => {
  console.log("app run on port" + port);
});
