import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json"
        );
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {data && data.map((item) => <Card data={item} />)}
    </div>
  );
}

export default App;
