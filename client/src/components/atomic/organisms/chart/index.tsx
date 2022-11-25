import Chart from "chart.js/auto";
import { RefObject, useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";

export default function ChartExample() {
  const canvasDom = useRef<any>(null);
  const testDom = useRef<any>(null);

  const [option, setOption] = useState("나이");
  const changeOption = (e: React.MouseEvent) => {
    setOption((e.target as HTMLDivElement).id);
  };

  useEffect(() => {
    const ctx = canvasDom.current?.getContext("2d");
    const itx = testDom.current?.getContext("2d");
    console.log(ctx);

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["10대", "20대", "30대", "40대"],
        datasets: [
          {
            label: "찬성",
            data: [10, 20, 30, 40],
          },
          {
            label: "반대",
            data: [60, 70, 50, 20],
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
            label: "찬성",
            data: [45, 60],
          },
          {
            label: "반대",
            data: [30, 20],
          },
        ],
      },
    });
  }, [option]);

  return (
    <div style={{ marginTop: "50px", width: "100%" }}>
      <button id="성별" onClick={changeOption}>
        성별 별 응답
      </button>
      <button id="나이" onClick={changeOption}>
        나이대 별 응답
      </button>

      {option == "나이" && <canvas ref={canvasDom}></canvas>}
      {option == "성별" && <canvas ref={testDom}></canvas>}
    </div>
  );
}
