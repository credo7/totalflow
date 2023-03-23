import {FC} from 'react';
import {ScrollView} from 'react-native';

import CategoryItem from './CategoryItem/CategoryItem';
import ElementDistributor from './ElementsDistrubutor/ElementsDistrubutor';

interface ItemsRowElement {
    name: string;
    amount: number;
}

interface ItemsRowProps {
    items: ItemsRowElement[];
}

export const ItemsRow: FC<ItemsRowProps> = ({items}) => (
    <ScrollView
        horizontal
        pagingEnabled
        style={{height: 100, marginTop: 20}}
        showsHorizontalScrollIndicator={false}
    >
        <ElementDistributor>
            {items.map((item) => (
                <CategoryItem name={item.name} amount={item.amount} key={`ItemsRow ${item.name}`} />
            ))}
        </ElementDistributor>
    </ScrollView>
);

// export default ItemsRow;
