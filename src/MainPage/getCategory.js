import Gethttp from "./Axios";

function GetCategory() {
  const url = "/dummy.json";
  const data = Gethttp(url).category;

  return (
    <div>
      {data &&
        data.map((category, index) => {
          return (
            <li key={index}>
              <a className="dropdown-item" href={category.url} key={index}>
                {category.name}
              </a>
            </li>
          );
        })}
    </div>
  );
}

export default GetCategory;
