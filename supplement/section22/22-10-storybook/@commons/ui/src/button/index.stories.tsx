import { MyButton } from ".";

export default {
  component: MyButton,
};

export const Basic = {
  render: () => {
    return <MyButton formState={{ isValid: true }}>등록하기</MyButton>;
  },
};
