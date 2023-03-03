import {css} from 'styled-components';
import styled from 'styled-components/native';

import {FC} from 'react';
import {Text} from 'react-native';

import {Spacer, VStack} from '../../../components/StyledComponents';

interface FinancialBlockProps {
    title: 'Expenses' | 'Balance' | 'Income';
    amount: number;
}

export const FinancialBlock: FC<FinancialBlockProps> = ({title, amount}) => (
    <Container title={title}>
        <VStack>
            <Spacer vertical={6} />
            <Text>{title}</Text>
            <Spacer vertical={4} />
            <Text>{amount}</Text>
        </VStack>
    </Container>
);

interface Container {
    title: 'Expenses' | 'Balance' | 'Income';
}

const Container = styled.View<Container>`
    width: 33%;
    justify-content: center;
    align-items: center;

    ${(props) => {
        switch (props.title) {
            case 'Expenses':
                return css`
                    align-items: flex-start;
                `;
            case 'Balance':
                return css`
                    align-items: center;
                `;
            case 'Income':
                return css`
                    align-items: flex-end;
                `;
            default:
                return css`
                    align-items: center;
                `;
        }
    }}
`;
