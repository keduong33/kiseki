import { useNavigate } from "react-router-dom";
import Page from "../../components/page/Page";
import { PageLocation } from "../../components/page/PageLocation";
import { Button } from "../../components/shadcn/ui/button";

function MySubjects() {
  const navigate = useNavigate();
  return (
    <Page pageTitle="My Subjects">
      <>
        <div className="flex gap-4">
          <Button
            onClick={() => {
              navigate(`${PageLocation.MySubjects}/Maths`);
            }}
          >
            Math
          </Button>

          <Button
            onClick={() => {
              navigate(`${PageLocation.MySubjects}/English`);
            }}
          >
            English
          </Button>
        </div>
      </>
    </Page>
  );
}

export default MySubjects;
