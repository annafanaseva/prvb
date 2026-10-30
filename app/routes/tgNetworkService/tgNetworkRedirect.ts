import { redirect } from "react-router";

// Old URL of the Rabotnik network page: permanent redirect keeps SEO and old links
export function loader() {
   return redirect("/rabotnik-network", 301);
}
