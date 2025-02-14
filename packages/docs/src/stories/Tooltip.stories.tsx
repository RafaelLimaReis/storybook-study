import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@mystudy-ui/react'
import { PlusCircle } from 'phosphor-react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: <Button><PlusCircle weight='bold' /></Button>,
    content: 'Create account'
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: false,
      description: 'Elemento que ativa o tooltip (exemplo: botão, ícone, etc.).',
      table: {
        type: { summary: 'ReactNode' }
      }
    },
    content: {
      description: 'String exibida na tooltip'
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Posição da tooltip.',
      table: {
        type: {summary: 'string'}
      }
    }
  }
} as Meta<TooltipProps>

export const Top: StoryObj<TooltipProps> = {}
export const Right: StoryObj<TooltipProps> = {
  args: {
    side: 'right'
  }
}
export const Bottom: StoryObj<TooltipProps> = {
  args: {
    side: 'bottom'
  }
}
export const Left: StoryObj<TooltipProps> = {
  args: {
    side: 'left'
  }
}