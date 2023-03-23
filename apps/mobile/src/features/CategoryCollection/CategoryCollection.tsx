import styled from 'styled-components/native';

import {FC} from 'react';
import {View} from 'react-native';

import {ItemsRow} from './ItemsRow';

interface DataEl {
    type: 'balance' | 'expense' | 'income';
    name: string;
    amount: number;
}

const data: DataEl[] = [
    {type: 'income', name: 'Salary', amount: 0},
    {type: 'income', name: 'Sold smth', amount: 2000},
    {type: 'income', name: 'Pension', amount: 0},
    {type: 'income', name: 'Relatives', amount: 0},
    {type: 'balance', name: 'Sberbank', amount: 15807.43},
    {type: 'balance', name: 'Wise USD', amount: 2000},
    {type: 'balance', name: 'Thai', amount: 3500},
    {type: 'balance', name: 'Emil', amount: -14500},
    {type: 'expense', name: 'Flat', amount: 0},
    {type: 'expense', name: 'Groceries', amount: 56.09},
    {type: 'expense', name: 'Restaurants', amount: 13.69},
    {type: 'expense', name: 'Transport', amount: 1.86},
    {type: 'expense', name: 'Entertaiment', amount: 0},
    {type: 'expense', name: 'Service', amount: 105.93},
];

const IncomeRow = styled(ItemsRow)``;
const BalanceRow = styled(ItemsRow)``;
const ExpenseRow = styled(ItemsRow)``;

const CategoryCollection: FC = () => {
    const incomes = data.filter((transaction) => transaction.type === 'income');
    const balances = data.filter((transaction) => transaction.type === 'balance');
    const expenses = data.filter((transaction) => transaction.type === 'expense');

    return (
        <View>
            <IncomeRow items={incomes} />
            <BalanceRow items={balances} />
            <ExpenseRow items={expenses} />
        </View>
    );
};

export default CategoryCollection;
