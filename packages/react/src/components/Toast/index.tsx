import React, { ReactNode, useState } from "react";
import { Action, Provider, Viewport } from "@radix-ui/react-toast";
import { ToastClose, ToastContainer, ToastDescription, ToastTitle } from "./styles";

export interface ToastProps {
    children: ReactNode
    title: string | null
    description: string | null
    isClosable?: boolean
    open: boolean
    setOpen: (value: boolean) => void
}

export const Toast = ({children, title, description, isClosable = false, open, setOpen}: ToastProps) => {
    console.log('open')
    return (
        <Provider swipeDirection="right">
            {children}
            <ToastContainer open={open} onOpenChange={setOpen}>
                <ToastTitle>{title}</ToastTitle>
                <ToastDescription>{description}</ToastDescription>
                {isClosable && (
                    <Action altText="Fechar" asChild>
                        <ToastClose onClick={() => setOpen(false)} />
                    </Action>
                )}
            </ToastContainer>
            <Viewport />
        </Provider>
    )
}

Toast.displayName = 'Toast';