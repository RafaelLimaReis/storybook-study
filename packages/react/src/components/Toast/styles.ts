import * as Toast from "@radix-ui/react-toast";
import { styled } from "../../styles";

export const ToastContainer = styled(Toast.Root, {
    position: 'fixed',
    bottom: '0',
    right: '0',
    display: 'flex',
    flexDirection: 'column'
})
export const ToastTitle = styled(Toast.Title, {})
export const ToastDescription = styled(Toast.Description, {})
export const ToastClose = styled('button', {})