import React from "react";
import { Typography } from "@mui/material";

interface TextProps{
    children: React.ReactNode;
    variant: 'h3'| 'body1'| 'h4'| 'subtitle1'| 'subtitle2';
}

const Text: React.FC<TextProps> = ({ children, variant}) => {
    return (
    <Typography 
        variant={variant}>{children}
    </Typography>
    )
}

export default Text;