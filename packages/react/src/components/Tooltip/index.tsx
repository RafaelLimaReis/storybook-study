import { Portal, Provider, Root, Trigger } from "@radix-ui/react-tooltip"
import React from "react"
import { TooltipContainer, TooltipArrow } from "./styles"

export interface TooltipProps {
    children: React.ReactNode
    content: string
    side?: 'top'|'left'|'right'|'bottom'
}

export const Tooltip = ({ children, content, side = 'top' }: TooltipProps) => {
    return (
        <Provider>
            <Root delayDuration={200}>
                <Trigger asChild>
                    {children}
                </Trigger>
                <Portal>
                    <TooltipContainer sideOffset={4} side={side}>
                        {content}
                        <TooltipArrow />
                    </TooltipContainer>
                </Portal>
            </Root>
        </Provider>
    )
}

Tooltip.displayName = 'Tooltip'
