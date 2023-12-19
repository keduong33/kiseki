import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import KisekiButton from "../../components/kiseki/button";

function Insights() {
  const query = useQuery({
    queryKey: ["results"],
    queryFn: async () => await axios.get("/api/get-results"),
  });

  if (query.isSuccess) console.log(query.data);

  return (
    <>
      <KisekiButton>Get Result</KisekiButton>
    </>
  );
}

export default Insights;
