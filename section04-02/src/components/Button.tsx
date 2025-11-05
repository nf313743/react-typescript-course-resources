import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

// Type predicate
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  //if(isAnchorProps(props))
  if (props.el === "anchor") {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
