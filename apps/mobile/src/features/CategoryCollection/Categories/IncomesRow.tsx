import {FC} from 'react';
import {Text} from 'react-native';

interface IncomeRowProps {
    category: string;
    amount: number;
}

// type IncomeRowProps = {items: IncomeElement[]};

const IncomesRow: FC<IncomeRowProps[]> = (items) => (
    <>
        {items.map((item) => (
            <Text>{item.category}</Text>
        ))}
    </>
);

export default IncomesRow;
