import { useForm } from "react-hook-form";
import { MyInput } from ".";

export default {
  component: MyInput,
};

export const Basic = {
  render: () => {
    return <MyInput type="text" name="title" />;
  },
};
