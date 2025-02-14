import { styled, keyframes } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

const slideUpAndFade = keyframes({
    from: {
        opacity: 0,
        transform: 'translateY(2px)'
    },
    to: {
        opacity: 1,
        transform: 'translateY(0)'
    }
})

const slideRightAndFade = keyframes({
    from: {
        opacity: 0,
        transform: 'translateX(-2px)'
    },
    to: {
        opacity: 1,
        transform: 'translateX(0)'
    }
})

const slideDownAndFade = keyframes({
    from: {
        opacity: 0,
        transform: 'translateY(-2px)'
    },
    to: {
        opacity: 1,
        transform: 'translateY(0)'
    }
})

const slideLeftAndFade = keyframes({
    from: {
        opacity: 0,
        transform: 'translateX(2px)'
    },
    to: {
        opacity: 1,
        transform: 'translateX(0)'
    }
})

export const TooltipContainer = styled(Tooltip.Content, {
    backgroundColor: '$gray900',
    padding: '$3 $4',
    borderRadius: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    color: '$gray100',
    animationDuration: '600ms',
    animationTimingFunction: 'cubic-bezier(.16, 1, .3, 1)',

    '&[data-state="delayed-open"][data-side="top"]': {
	    animationName: `${slideDownAndFade}`
    },
    '&[data-state="delayed-open"][data-side="right"]': {
	    animationName: `${slideLeftAndFade}`
    },
    '&[data-state="delayed-open"][data-side="bottom"]': {
	    animationName: `${slideUpAndFade}`
    },
    '&[data-state="delayed-open"][data-side="left"]': {
	    animationName: `${slideRightAndFade}`
    },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
    fill: '$gray900'
})
