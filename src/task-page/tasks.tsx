import { useEffect, useState } from "react";
import Axios from "axios";
interface Status {
  id: number;
  name: string;
}

export function Tasks() {
  const [data, setData] = useState<Status[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const statusApiUrl = "https://momentum.redberryinternship.ge/api/statuses";
  const token = "9e6b1a8e-0764-466b-a588-4b980d20bc57";

  useEffect(() => {
    Axios.get(statusApiUrl, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        console.log("API Response:", response);
        setData(response.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError(err.message);
      });
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div>line</div>
      <div className="flex gap-[52px] mt-[79px]">
        {data.map((status, index) => {
          const bgColors = ["#f7bc30", "#fb5607", "#ff006e", "#3a86ff"];
          return (
            <div
              key={status.id}
              className={`h-[54px] w-full flex items-center justify-center rounded-[10px] px-4 py-[15px] text-white`}
              style={{ backgroundColor: bgColors[index] }}
            >
              {status.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
