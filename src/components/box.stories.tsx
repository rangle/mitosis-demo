import DsBox from "../../output/react/src/components/box.lite";

export default {
  title: "Components/Box",
  component: DsBox,
};

export const Basic = (args: any) => <DsBox {...args} />;

export const Primary = () => (
  <DsBox style={{ color: "red" }}>
    <h1>This is a box</h1>
  </DsBox>
);
