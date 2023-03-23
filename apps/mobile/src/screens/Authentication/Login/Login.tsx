import {FC} from 'react';
import {Text, View} from 'react-native';

import {CustomInput} from '../../../components/CustomInput';

export const LoginScreen: FC = () => {
    return (
        <View>
            <Text>Login Page</Text>
            <CustomInput />
        </View>
    );
};
