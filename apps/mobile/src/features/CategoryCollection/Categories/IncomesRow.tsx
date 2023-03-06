import {FC} from 'react';
import {ScrollView} from 'react-native';

import CategoryItem from './CategoryItem/CategoryItem';
import ElementDistributor from './ElementsDistrubutor/ElementsDistrubutor';
import {IncomeRow} from './types';

interface IncomesRowProps {
    items: IncomeRow[];
}

// const ElementDistrubutor: FC = () => {
//     return <View></View>;
// };

const IncomesRow: FC<IncomesRowProps> = ({items}) => (
    <ScrollView
        horizontal
        pagingEnabled
        style={{height: 100, marginTop: 20}}
        showsHorizontalScrollIndicator={false}
    >
        <ElementDistributor>
            {items.map((item, i) => (
                <CategoryItem item={item} key={item.name + i} />
            ))}
        </ElementDistributor>
    </ScrollView>
);

export default IncomesRow;
