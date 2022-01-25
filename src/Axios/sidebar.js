import Gethttp from "./Axios";

const Sidebar = () => {
  const url = "/dummy2.json";
  const data = Gethttp(url).top;

  return (
    <div>
      {data &&
        data.map((top) => {
          return (
            <div className="side-contents" key={top.id}>
              <div id="side-image">
                <a href={top.url}>
                  <img id="side-image" src={top.image}></img>
                </a>
              </div>
              <div id="side-number">{top.id}</div>
              <div className="side-box">
                <div id="side-category">
                  {top.genre}/{top.production}
                </div>
                <a href={top.url}>
                  <div id="side-name">{top.title}</div>
                </a>

                <div id="side-rate">{top.rate}% 달성</div>
              </div>
            </div>
          );
        })}
      ;
    </div>
  );
};

export default Sidebar;
