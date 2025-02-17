import React, { ReactNode } from "react";
import { Action, Provider } from "@radix-ui/react-toast";
import { ToastClose, ToastContainer, ToastDescription, ToastTitle, ViewportContainer } from "./styles";
import { X } from "phosphor-react";

export interface ToastProps {
    children: ReactNode
    title: string | null
    description: string | null
    isClosable?: boolean
    duration?: number
    open: boolean
    setOpen: (value: boolean) => void
}

export const Toast = ({children, title, description, duration = 5000,isClosable = false, open, setOpen}: ToastProps) => {
    return (
        <Provider swipeDirection="right" duration={duration}>
            {children}
            <ToastContainer open={open} onOpenChange={setOpen}>
                <ToastTitle>
                    {title}
                    {isClosable && (
                        <Action altText="Fechar" asChild>
                            <ToastClose onClick={() => setOpen(false)}>
                                <X />
                            </ToastClose>
                        </Action>
                    )}
                </ToastTitle>
                <ToastDescription>{description}</ToastDescription>
            </ToastContainer>
            <ViewportContainer />
        </Provider>
    )
}

Toast.displayName = 'Toast';