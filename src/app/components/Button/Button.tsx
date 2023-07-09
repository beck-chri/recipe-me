import { button } from "@/app/components/Button/Button.styles";

type Props = {
  text: string;
};

export const Button = ({ text }: Props) => {
  return <button className={button}>{text}</button>;
};
