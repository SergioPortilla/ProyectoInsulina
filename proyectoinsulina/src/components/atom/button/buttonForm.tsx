import { FC } from 'react';
import { ButtonFormData } from './buttonFormData';
// Suempre los imports estandard tambien
import { ButtonStyle } from "./buttons.Style";

export const ButtonForm: FC<ButtonFormData> = (props) => {
    return (
        <ButtonStyle
            onClick={props.onClick}
            className={props.className}>
            {props.children}
        </ButtonStyle>
    )
};
