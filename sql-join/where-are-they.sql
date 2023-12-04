select  "line1",
    "cities"."name",
    "district"
  from "addresses"
  join "cities" using ("cityId");
