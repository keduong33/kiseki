import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "../../components/shadcn/ui/button";

function Dashboard() {
  const query = useQuery({
    queryKey: ["healthcheck"],
    queryFn: async () => await axios.get("/api/healthcheck"),
    enabled: false,
    retry: false,
  });

  return (
    <>
      <>Whatever here</>
      <Button onClick={() => query.refetch()}>Fetch</Button>
      {/* {query.isSuccess && <>{query.data.data}</>} */}
    </>
  );
}

export default Dashboard;
