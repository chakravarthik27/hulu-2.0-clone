const API_KEY = "2a49929acec63f8d0dfdcde33c7cc7d5"

export default [
  {
    category: `/trending/all/day?api_key=${API_KEY}&language=eng-ENG`,
    title: "Trending"
  },
  {
    category: `/movie/top_rated?api_key=${API_KEY}&language=eng-ENG`,
    title: "Top Rated"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=eng-ENG&sort_by=vote_count.desc`,
    title: "All-Time Best"
  },
  {
    category: `/movie/upcoming?api_key=${API_KEY}&language=eng-ENG`,
    title: "Upcoming"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=eng-ENG&sort_by=popularity.desc&with_genres=28`,
    title: "Action"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=eng-ENG&sort_by=popularity.desc&with_genres=80`,
    title: "Crime"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=eng-ENG&sort_by=popularity.desc&with_genres=35`,
    title: "Comedy"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=eng-ENG&sort_by=popularity.desc&with_genres=36`,
    title: "History"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=eng-ENG&sort_by=popularity.desc&with_genres=27`,
    title: "Horror"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=eng-ENG&sort_by=popularity.desc&with_genres=9648`,
    title: "Mystery"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=eng-ENG&sort_by=popularity.desc&with_genres=10749`,
    title: "Romance"
  },
  {
    category: `/discover/movie?api_key=${API_KEY}&language=eng-ENG&sort_by=popularity.desc&with_genres=53`,
    title: "Thriller"
  }
]
