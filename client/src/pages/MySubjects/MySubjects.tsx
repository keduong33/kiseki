import { useNavigate } from "react-router-dom";
import { PageLocation } from "../../../types/PageLocation";
import { Button } from "../../components/shadcn/ui/button";

function MySubjects() {
  const navigate = useNavigate();
  return (
    <>
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
    </>
  );
}

export default MySubjects;
