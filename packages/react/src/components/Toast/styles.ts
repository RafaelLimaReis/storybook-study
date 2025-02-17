import * as Toast from "@radix-ui/react-toast";
import { styled, keyframes } from "../../styles";

const hide = keyframes({
    from: {
		opacity: 1
	},
	to: {
		opacity: 0
	}
})

const slideIn = keyframes({
    from: {
		transform: 'translateX(100%)'
	},
	to: {
		transform: 'translateX(0)'
	}
})

const swipeOut = keyframes({
    from: {
		transform: 'translateX(var(--radix-toast-swipe-end-x))'
	},
	to: {
		transform: 'translateX(100%)'
	}
})

export const ViewportContainer = styled(Toast.Viewport, {
    position: 'fixed',
    bottom: '0',
    right: '0',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vh',
    margin: '0',
    listStyle: 'none',
    zIndex: '2147483647',
    outline: 'none'
})

export const ToastContainer = styled(Toast.Root, {
    background: '$gray800',
    padding: '$3 $5',
    borderRadius: '$sm',

    '&[data-state="open"]': {
        animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
    },

    '&[data-state="closed"]': {
        animation: `${hide} 100ms ease-in`
    },

    '&[data-swipe="move"]': {
        transform: 'translateX(var(--radix-toast-swipe-move-x))'
    },

    '&[data-swipe="cancel"]': {
        transform: 'translateX(0)',
        transition: 'transform 200ms ease-out'
    },

    '&[data-swipe="end"]': {
        animation: `${swipeOut} 100ms ease-out`
    },

})
export const ToastTitle = styled(Toast.Title, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '$1',

    fontFamily: '$default',
    fontSize: '$xl',
    color: '$white',
    fontWeight: '$bold',
})
export const ToastDescription = styled(Toast.Description, {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray200',
    fontWeight: '$regular',
})

export const ToastClose = styled('button', {
    all: 'unset',
    width: '$5',
    height: '$5',
    cursor: 'pointer',
    color: '$gray200'
})