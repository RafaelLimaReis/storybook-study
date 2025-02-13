import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@mystudy-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Cillum excepteur nulla velit proident duis. Ipsum incididunt duis sit nulla. Mollit voluptate fugiat est culpa.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}