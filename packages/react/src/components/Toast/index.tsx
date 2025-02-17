import React, { ReactNode, useEffect, useState } from "react";
import { Action, Provider } from "@radix-ui/react-toast";
import { ToastClose, ToastContainer, ToastDescription, ToastTitle, ViewportContainer, Progress } from "./styles";
import { X } from "phosphor-react";

export interface ToastProps {
    children: ReactNode
    title: string | null
    description: string | null
    isClosable?: boolean
    duration?: number
    open: boolean
    withProgress?: boolean
    setOpen: (value: boolean) => void
}

export const Toast = ({children, title, description, duration = 5000, isClosable = false, open, setOpen, withProgress = false}: ToastProps) => {
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        if (!withProgress || !open) return;

        setProgress(100);

        const interval = 10;
        const decrementValue = 100 / (duration / interval);
        const timer = setInterval(() => {
            setProgress(prevProgress => Math.max(prevProgress - decrementValue, 0));
        }, interval);

        return () => clearInterval(timer); 
    }, [duration, open, withProgress])
    
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
                {withProgress && <Progress css={{ '--width-progress': progress + '%' }}/>}
            </ToastContainer>
            <ViewportContainer />
        </Provider>
    )
}

Toast.displayName = 'Toast';