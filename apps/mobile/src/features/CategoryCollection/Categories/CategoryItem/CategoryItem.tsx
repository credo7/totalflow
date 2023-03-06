import styled from 'styled-components/native';

import {VStack} from '../../../../components/StyledComponents';
import {emojiToString} from '../../../../utils/emoji';
import {IncomeRow} from '../types';

const Wrapper = styled.View`
    height: ${(props) => props.theme.categories.sizes.circle};
    width: ${(props) => props.theme.categories.sizes.circle};
    background: ${(props) => props.theme.categories.colors.circle};
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-color: ${(props) => props.theme.categories.colors.circleBorder};
    border-width: ${(props) => props.theme.categories.sizes.circleBorder};
`;

const SmileText = styled.Text`
    font-size: ${(props) => props.theme.categories.sizes.smile};
`;

const NameText = styled.Text`
    font-size: ${(props) => props.theme.categories.sizes.name};
`;

const AmountText = styled.Text`
    font-size: ${(props) => props.theme.categories.sizes.amount};
`;

const CategoryItem = ({item}: {item: IncomeRow}) => {
    return (
        <VStack>
            <Wrapper>
                <SmileText style={{fontSize: 25}}>{emojiToString('U+1F600')}</SmileText>
            </Wrapper>
            <NameText>{item.name}</NameText>
            <AmountText>{item.amount}</AmountText>
        </VStack>
    );
};

export default CategoryItem;
