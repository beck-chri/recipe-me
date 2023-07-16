import { css } from "../../styled-system/css";
import { Button } from "@/app/components/Button/Button";

/**
 * A page is UI that is unique to a route. This one is the home page.
 * It will be rendered inside the layout
 */
export default function Home() {
  return (
    <>
      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Hello 🐼!
        <Button text={"Panda"} />
      </div>
    </>
  );
}
