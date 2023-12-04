select "firstName",
  "lastName",
  sum("amount") as "totalPaid"
from "customers" as "c"
join "rentals" using ("customerId")
join "payments" using ("rentalId")
group by  "c"."customerId",
"c"."firstName",
  "c"."lastName"
order by "totalPaid" desc;
