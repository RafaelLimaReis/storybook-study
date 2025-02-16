import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@mystudy-ui/react'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';

export default {
  title: 'Components/Toast',
  component: Toast,
  args: {
    title: 'Cadastro realizado',
    description: 'Cadastro realizado com sucesso!',
    open: false,
    isClosable: true,
  }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
    render: (args) => {
      const [open, setOpen] = useState(false);
  
      return (
        <div>
          <Button onClick={() => setOpen(true)}><PlusCircle weight='bold' /></Button>
  
          <Toast {...args} open={open} setOpen={setOpen} />
        </div>
      );
    }
  };