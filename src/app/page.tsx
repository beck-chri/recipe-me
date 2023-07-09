import { css } from "../../styled-system/css";
import { Button } from "@/app/components/Button/Button";

export default function Home() {
  return (
    <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
      Hello 🐼!
      <Button text={"Panda"} />
    </div>
  );
}
