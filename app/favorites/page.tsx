import { fetchFevorite } from "@/action/action";
import LandmarkList from "@/components/home/LandmarkList";

async function FavoritesPage() {
  const fevorites = await fetchFevorite();
  console.log(fevorites);
  return <LandmarkList landmarks={fevorites} />;
}
export default FavoritesPage;
