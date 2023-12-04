select "countries"."name",
  count("cityId") as "citiesPerCountry"
  from "countries"
  join "cities" using ("countryId")
  group by "countryId";
