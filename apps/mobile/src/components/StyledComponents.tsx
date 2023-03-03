import styled from 'styled-components/native';

export const HStack = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

interface VStackProps {
    position?: 'left' | 'center' | 'right';
    width?: number | string;
}

export const VStack = styled.View<VStackProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

interface SpacerProps {
    size?: number;
    vertical?: number;
    horizontal?: number;
}

export const Spacer = styled.View<SpacerProps>`
    ${({size}) => size && `height: ${size}px;`}
    ${({vertical}) => vertical && `height: ${vertical}px;`}
  ${({horizontal}) => horizontal && `width: ${horizontal}px;`}
`;
