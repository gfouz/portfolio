import { createElement } from "react";
import { ISvgProps } from "./constants";

export function Github(props: React.SVGProps<SVGSVGElement> | ISvgProps) {
  return createElement(
    "svg",
    {
      viewBox: "0 0 32 32",
      width: props.width || "1em",
      length: "auto",
      ...props,
    },
    createElement("path", {
      fill: props.color,
      d: "M16 2c-.504 0-.996.184-1.375.563l-2.813 2.843c-.152.082-.28.2-.374.344l-8.876 8.875a1.947 1.947 0 000 2.75l12.063 12.063a1.955 1.955 0 002.75 0l12.063-12.063a1.947 1.947 0 000-2.75L17.374 2.562A1.923 1.923 0 0016 2zm0 2.031L27.969 16 16 27.969 4.031 16l8.282-8.281 1.75 1.75A1.98 1.98 0 0014 10c0 .738.402 1.371 1 1.719v8.562c-.598.348-1 .98-1 1.719a1.999 1.999 0 104 0c0-.738-.402-1.371-1-1.719v-7.843l3.063 3.062A1.999 1.999 0 0022 18c1.104 0 1.999-.895 1.999-2a1.999 1.999 0 00-2.5-1.938L17.937 10.5A1.999 1.999 0 0016 8a1.98 1.98 0 00-.53.063l-1.75-1.75z",
    }),
  );
}
export default Github;
