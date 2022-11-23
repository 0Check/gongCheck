import Chart from "chart.js/auto";
import { RefObject, useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";

export default function ChartExample() {
  const canvasDom = useRef<any>(null);
  const testDom = useRef<any>(null);

  const [option, setOption] = useState("성별");
  const changeOption = (e: React.MouseEvent) => {
    setOption((e.target as HTMLDivElement).id);
  };

  useEffect(() => {
    const itx = testDom.current?.getContext("2d");
    const ctx = canvasDom.current?.getContext("2d");
    console.log(ctx);

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["10대", "20대", "30대", "40대"],
        datasets: [
          {
            label: "투표수",
            data: [10, 30, 20, 50],
          },
        ],
      },
    });

    new Chart(itx, {
      type: "bar",
      data: {
        labels: ["남", "여"],
        datasets: [
          {
            label: "투표수",
            data: [45, 50],
          },
        ],
      },
    });
  }, [option]);

  console.log(option);
  return (
    <div>
      <button id="성별" onClick={changeOption}>
        성별
      </button>
      <button id="나이" onClick={changeOption}>
        나이
      </button>

      {option == "성별" && <canvas ref={canvasDom}></canvas>}
      {option == "나이" && <canvas ref={testDom}></canvas>}
    </div>
  );
}
