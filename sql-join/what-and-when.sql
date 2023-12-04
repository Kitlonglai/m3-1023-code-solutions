select  "releaseYear",
    "genres"."name",
    "title"
  from "films"
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "title" = 'Boogie Amelie';
