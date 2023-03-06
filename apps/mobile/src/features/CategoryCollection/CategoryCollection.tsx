import {FC} from 'react';

import BalancesRow from './Categories/BalancesRow';
import ExpensesRow from './Categories/ExpensesRow';
import IncomesRow from './Categories/IncomesRow';

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

const CategoryCollection: FC = () => (
    <>
        <IncomesRow items={data} />
        <BalancesRow />
        <ExpensesRow />
    </>
);

export default CategoryCollection;
