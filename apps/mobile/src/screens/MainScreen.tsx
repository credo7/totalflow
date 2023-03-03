import {FC} from 'react';
import {View} from 'react-native';

import AccountSummaryHeader from '../features/AccountSummaryHeader/AccountSummaryHeader';
import CategoryCollection from '../features/CategoryCollection/CategoryCollection';

const MainScreen: FC = () => (
    <View>
        <AccountSummaryHeader />
        <CategoryCollection />
    </View>
);

export default MainScreen;
