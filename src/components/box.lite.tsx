export type Props = {
  style: Partial<CSSStyleDeclaration>;
  children?: JSX.ElementChildrenAttribute["children"];
};

export default function Component(props: Props) {
  return (
    <div
      css={{ boxSizing: "border-box", minWidth: "0" }}
      {...{ style: props.style }}
    >
      {props.children}
    </div>
  );
}
