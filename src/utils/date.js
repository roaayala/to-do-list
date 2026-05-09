import { format } from "date-fns";

function isoDateToString(date) {
	return format(date, "dd MMMM yyyy");
}

export { isoDateToString };
