import styled from 'styled-components/native';

import {FC} from 'react';

import {VStack} from '../../../../components/StyledComponents';
import {emojiToString} from '../../../../utils/emoji';

const Wrapper = styled.View`
    height: ${(props) => props.theme.features.categories.sizes.circle};
    width: ${(props) => props.theme.features.categories.sizes.circle};
    background: ${(props) => props.theme.features.categories.colors.circle};
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-color: ${(props) => props.theme.features.categories.colors.circleBorder};
    border-width: ${(props) => props.theme.features.categories.sizes.circleBorder};
`;

const SmileText = styled.Text`
    font-size: ${(props) => props.theme.features.categories.sizes.smile};
`;

const NameText = styled.Text`
    font-size: ${(props) => props.theme.features.categories.sizes.name};
`;  

const AmountText = styled.Text`
    font-size: ${(props) => props.theme.features.categories.sizes.amount};
`;

interface CategoryItemProps {
    name: string;
    amount: number;
}

const CategoryItem: FC<CategoryItemProps> = ({name, amount}) => (
    <VStack>
        <Wrapper>
            <SmileText style={{fontSize: 25}}>{emojiToString('U+1F600')}</SmileText>
        </Wrapper>
        <NameText>{name}</NameText>
        <AmountText>{amount}</AmountText>
    </VStack>
);

export default CategoryItem;
