import styled from 'styled-components/native';

import {FC, useState} from 'react';
import {TextInput} from 'react-native';

interface CustomInputProps {
    isError?: boolean;
    isAgreed?: boolean;
    isFocused?: boolean;
}

const StyledInput = styled(TextInput)<CustomInputProps>`
    width: ${(props) => props.theme.components.customInput.sizes.width};
    height: ${(props) => props.theme.components.customInput.sizes.height};
    background-color: ${(props) => props.theme.colors.background.primary};
    border-radius: ${(props) => props.theme.components.customInput.border.radius};
    border: ${(props) =>
        props.isFocused
            ? props.theme.components.customInput.border.width.md
            : props.theme.components.customInput.border.width.sm};
    border-color: ${(props) => {
        if (props.isError) return props.theme.colors.background.error;
        if (props.isFocused) return props.theme.colors.background.active;
        if (props.isAgreed) return props.theme.colors.background.agreed;
        return props.theme.colors.background.thirdLight;
    }};
    font-size: 16px;
    padding-horizontal: 16px;
`;

export const CustomInput: FC<CustomInputProps> = ({isAgreed, isError}) => {
    const [focus, setFocus] = useState(false);
    return (
        <StyledInput
            isFocused={focus}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            isAgreed={isAgreed}
            isError={isError}
        />
    );
};
