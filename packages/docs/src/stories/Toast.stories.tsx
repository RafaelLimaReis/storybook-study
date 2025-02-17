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
    duration: 5000,
    withProgress: false,
  },
  argTypes: {
    open: {
      description: 'Estado atual do toast, aberto ou fechado.'
    },
    isClosable: {
      description: 'Se o tooltip pode ser fechado antes do tempo',
      table: {
        type: { summary: 'boolean' }
      }
    },
    duration: {
      description: 'Tempo em ms para o tooltip desaparecer (em ms)',
      table: {
        defaultValue: { summary: '5000ms' },
        type: {summary: 'number'}
      },
      control: {
        type: 'number'
      }
    },
    withProgress: {
      description: 'Se será adicionado uma barra de progresso para mostrar quando a toast sera fechada.',
      table: {
        type: { summary: 'boolean' }
      }
    }
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

export const DontClose: StoryObj<ToastProps> = {
  args: {
    title: 'Cadastro realizado',
    description: 'Cadastro realizado com sucesso!',
    open: false,
    isClosable: false,
  },
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

export const LessTimeClose: StoryObj<ToastProps> = {
  args: {
    title: 'Cadastro realizado',
    description: 'Cadastro realizado com sucesso!',
    open: false,
    isClosable: false,
    duration: 2000
  },
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

export const withProgress: StoryObj<ToastProps> = {
  args: {
    title: 'Cadastro realizado',
    description: 'Cadastro realizado com sucesso!',
    open: false,
    isClosable: false,
    duration: 2000,
    withProgress: true
  },
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