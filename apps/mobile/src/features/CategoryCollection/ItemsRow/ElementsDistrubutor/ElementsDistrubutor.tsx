import React, {ReactNode} from 'react';
import {Dimensions, View, ViewStyle} from 'react-native';

interface ElementDistributorProps {
    children: ReactNode;
    style?: ViewStyle;
}

const ElementDistributor: React.FC<ElementDistributorProps> = ({children, style}) => {
    const elements = React.Children.toArray(children);
    const numViews = Math.ceil(elements.length / 4); // calculate the number of views needed
    const views = [];

    // divide elements into groups of 3 or 4 and add them to each view
    for (let i = 0; i < numViews; i++) {
        const start = i * 4;
        const end = start + (i === numViews - 1 ? elements.length % 4 || 4 : 4); // handle last view if there are fewer than 3 elements left
        views.push(elements.slice(start, end));
    }

    return (
        <>
            {views.map((viewElements, index) => (
                <View
                    key={index}
                    style={[
                        {flexDirection: 'row'},
                        {width: Dimensions.get('screen').width - 32},
                        style,
                    ]}
                >
                    {viewElements.map((element, elementIndex) => (
                        <View key={elementIndex} style={{flex: 1}}>
                            {element}
                        </View>
                    ))}
                </View>
            ))}
        </>
    );
};

export default ElementDistributor;
