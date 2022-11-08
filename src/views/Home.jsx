import TheRecomended from "../components/common/TheRecomended";
import { useOnMounted } from "../hooks";
export default function Home() {
  useOnMounted(() => {
    console.log("mounted");
  });

  return <TheRecomended />;
}
