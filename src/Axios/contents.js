import Gethttp from "./Axios";

const Contentsbar = () => {
  const url = "/dummy3.json";
  const data = Gethttp(url).top;

  return (
    <div className="contents">
      <div className="contents-box-top" key={0}>
        <p>
          <h1>인기</h1>
        </p>
        <p>
          <h2>text</h2>
        </p>
      </div>
      {data &&
        data.map((top) => {
          return (
            <div className="contents-box" key={top.id}>
              <a href={top.url}>
                <img
                  id="contents-image"
                  src={top.image}
                  width={250}
                  height={200}
                ></img>
              </a>

              <a href={top.url}>
                <div id="side-name">{top.title}</div>
              </a>
              <div>
                {top.genre}/{top.production}
              </div>
              <div>{top.rate}% 달성</div>
            </div>
          );
        })}
    </div>
  );
};

export default Contentsbar;
