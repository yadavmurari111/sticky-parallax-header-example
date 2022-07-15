import {FunctionComponent} from "react";
import {FlatList, Text, View} from "react-native";
import YodaScreen from "./parallax-header";
import * as React from 'react';

export const FlatListExample: FunctionComponent = () => {
    const zings = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

    const renderFeedItem = ({ item , index}) => (
        <View style={{height:300,margin:20,backgroundColor:index%2 === 0 ? 'yellow':'red',flexDirection:'row',justifyContent:'center'}} >
            <Text>{item}</Text>
        </View>
    );

    return <FlatList
        bounces={false}
        data={zings}
        windowSize={12}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        ListHeaderComponent={<View><Text>plane flatlist example to see scrolling speed</Text></View>}
        scrollToOverflowEnabled
        decelerationRate="fast"
        renderItem={renderFeedItem}
    />


};
export default FlatListExample;
