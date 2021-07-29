import React from 'react';
import { storiesOf } from "@storybook/react";
import { Button } from './Button';



const Template = (args) => <Button {...args} />;

storiesOf("Button", module)
  .add("Login", () => <Button variant='login'>Login</Button>)

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Secondary Button',
};

// export const Login = Template.bind({});
// Login.args = {
//   variant: 'login',
//   label:'Login Button'
// }

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small Button',
};

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};