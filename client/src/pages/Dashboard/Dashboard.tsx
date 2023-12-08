import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Page from "../../components/page/Page";
import { Button } from "../../components/shadcn/ui/button";

function Dashboard() {
  const query = useQuery({
    queryKey: ["healthcheck"],
    queryFn: async () => await axios.get("/healthcheck"),
    enabled: false,
    retry: false,
  });

  return (
    <Page pageTitle="Dashboard">
      <>Whatever here</>
      <Button onClick={() => query.refetch()}>Fetch</Button>
      {/* {query.isSuccess && <>{query.data.data}</>} */}
    </Page>
  );
}

export default Dashboard;
