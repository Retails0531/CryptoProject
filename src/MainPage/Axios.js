import { useEffect, useState } from "react";
import axios from "axios";

function Fetchhttp(uri) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios.get(
        "https://c1a40501-34c4-46ff-b7d0-954846dc1f8d.mock.pstmn.io/" + uri //만료
      );
      setdata(result.data);
      console.log(result.data);
    };
    fetchdata(); //처음 실행됨.

    // 카테고리 만드는 함수
    //   data.map((data, index) => console.log({ data }));
    //   const element = document.getElementById("category");
    //   element.innerHTML = `
    //   <li>
    //   <a className="dropdown-item" href="/#">
    //     게임장르
    //   </a>
    // </li>`;
  }, []);
}

export default Fetchhttp;
