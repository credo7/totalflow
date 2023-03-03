import {FC} from 'react';

import BalancesRow from './Categories/BalancesRow';
import ExpensesRow from './Categories/ExpensesRow';
import IncomesRow from './Categories/IncomesRow';

interface DataEl {
    type: 'Balance' | 'Expense' | 'Income';
    category: string;
    amount: number;
}

const data: DataEl[] = [
    {type: 'Income', category: 'Salary', amount: 0},
    {type: 'Income', category: 'Sold smth', amount: 2000},
    {type: 'Income', category: 'Pension', amount: 0},
    {type: 'Income', category: 'Relatives', amount: 0},
    
];

const CategoryCollection: FC = () => (
    <>
        <IncomesRow />
        <BalancesRow />
        <ExpensesRow />
    </>
);

export default CategoryCollection;
