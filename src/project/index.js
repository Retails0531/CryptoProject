import { useParams } from "react-router-dom";
import Gethttp from "./Axios";

function ProjectPage() {
  const id = useParams();
  console.log(id);

  const url = "/dummy.json";
  const data = Gethttp(url).carousel;

  return <div>hello</div>;
}

export default ProjectPage;
