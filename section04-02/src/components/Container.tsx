import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType> = {
  as: T | "div";
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// Polymorthic component
export default function Container<T extends ElementType>({
  as: Component,
}: ContainerProps<T>) {
  return <Component />;
}
