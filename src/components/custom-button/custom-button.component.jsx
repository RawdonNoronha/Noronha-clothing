import React from "react";
import { CustomButtonConatiner } from "./custome-button.styles";

const CustomButton = ( {children, ...props } ) => (
    <CustomButtonConatiner {...props}>
        {children}
    </CustomButtonConatiner>
)

export default CustomButton;