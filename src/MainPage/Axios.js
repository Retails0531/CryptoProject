import { useEffect, useState } from "react";
import axios from "axios";

function Gethttp(url) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const result = await axios.get(url);
        setdata(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, [url]);
  return data;
}

// 카테고리 만드는 함수
//   data.map((data, index) => console.log({ data }));
//   const element = document.getElementById("category");
//   element.innerHTML = `
//   <li>
//   <a className="dropdown-item" href="/#">
//     게임장르
//   </a>
// </li>`;

export default Gethttp;
