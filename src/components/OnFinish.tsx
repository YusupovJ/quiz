import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useQuestionStore } from "@/store/questionStore";
import { Cell, Pie, PieChart, Label } from "recharts";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router";

export const OnFinish = () => {
  const { result, finish } = useQuestionStore();
  const navigate = useNavigate();
  const corrects = result.split("").reduce((count, value) => (value === "1" ? count + 1 : count), 0);
  const wrongs = result.length - corrects;
  const percents = (corrects / result.length) * 100;

  const data = [
    { name: "Правильные ответы", value: corrects },
    { name: "Неправильные ответы", value: wrongs },
  ];
  const { number } = useSpring({
    from: { number: 0 },
    number: percents,
    delay: 1700,
    config: { duration: 1000 },
  });

  const onClick = () => {
    finish();
    navigate("/");
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full mt-10 text-lg">
        <Button>Закончить</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[250px]">
        <DialogHeader>
          <DialogTitle className="text-center">Твой результат</DialogTitle>
          <DialogDescription className="hidden" />
          <PieChart width={200} height={200}>
            <Pie data={data} cx={100} cy={100} innerRadius={60} outerRadius={80} fill="#8884d8" dataKey="value">
              <Cell className="fill-green-600 stroke-none outline-none" />
              <Cell className="fill-red-600 stroke-none outline-none" />
              <Label
                position="center"
                content={() => (
                  <animated.text
                    x={107}
                    y={107}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      fill: "white",
                    }}
                  >
                    {number.to((n) => `${n.toFixed(1)}%`)}
                  </animated.text>
                )}
              />
            </Pie>
          </PieChart>
          <Button className="w-full" onClick={onClick}>
            На главную
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
