import { format, parseISO } from "date-fns";

function beautifyDateString(dateString) {
  return format(parseISO(dateString), "dd MMMM yyyy");
}
function todayDateString() {
  return format(new Date(), "yyyy-MM-dd");
}

export { beautifyDateString, todayDateString };
