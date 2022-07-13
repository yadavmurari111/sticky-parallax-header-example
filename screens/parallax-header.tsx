import {FunctionComponent, useState} from "react";
import {FlatList, Text, View} from "react-native";
import {StyleSheet} from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';

const AccountsComponentTemplate: FunctionComponent = () => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [refreshingTabs, setRefreshingTabs] = useState(false);
    const [flatlistHeight, setFlatlistHeight] = useState(2000);
    const [scrollHeight, setScrollHeight] = useState(800);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const loadMoreHeight = flatlistHeight - scrollHeight;

    const renderHeaderBelow = () => (
        <View style={{height:300,backgroundColor:'grey',flexDirection:'row',justifyContent:'center'}} onLayout={e => setHeaderHeight(e.nativeEvent.layout.height)}>
            <Text>header</Text>
        </View>
    );const renderFeedItem = ({item,index}) => (
        <View style={{height:300,backgroundColor:index%2===0?'grey':'red',flexDirection:'row',justifyContent:'center'}} onLayout={e => setHeaderHeight(e.nativeEvent.layout.height)}>
            <Text>{item}</Text>
        </View>
    );
const zings = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

    const tabs = [
        {
            title: 'Zings',
            content: (
                <View>
                    <FlatList
                        bounces={false}
                        data={zings}
                        windowSize={12}
                        initialNumToRender={10}
                        maxToRenderPerBatch={10}
                        scrollToOverflowEnabled
                        decelerationRate="fast"
                        renderItem={renderFeedItem}
                    />
                </View>
            )
        },
        {
            title: 'Rezings',
            content: (
                <View><Text>First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.</Text></View>
            )
        },
        {
            title: 'Media',
            content: (
                <View><Text>'3nFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components'</Text></View>
            )
        },

    ];

    return <StickyParallaxHeader
        tabs={tabs}
        header={renderHeaderBelow()}
        tabTextStyle={styles.tabTextStyle}
        tabWrapperStyle={styles.tabWrapperStyle}
        tabTextActiveStyle={styles.tabTextActiveStyle}
        tabUnderlineColor={'black'}
        tabTextContainerStyle={styles.tabTextContainerStyle}
        contentContainerStyles={styles.contentContainerStyles}
        tabsContainerBackgroundColor={"white"}
    />


};
export default AccountsComponentTemplate;




const styles = StyleSheet.create({
    mainBox: {borderWidth: 0, height: '100%', borderColor: 'red', flex: 1},
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerBox: {
        position: 'absolute',
        elevation: 4,
        width: '100%',
        zIndex: 100,
        alignSelf: 'center'
    },
    tabsMainBox: {
        top: 0,
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    listFooterComponentBox: {
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center'
    },
    listFooterComponent: {alignItems: 'center'},
    handleEmpty: {
        marginTop: 1,
        height: '100%',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: 'white'
    },
    bottomsheetMainBox: {height: 100, paddingLeft: 40, paddingRight: 40},
    bottomsheetItemBox: {flexDirection: 'row', alignItems: 'center', paddingTop: 14},
    bottomsheetItemLabel: {paddingLeft: 10},

    headerContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainerStyles: {
        height: '100%',
        marginTop: 2,
        backgroundColor: 'white'
    },
    tabTextContainerStyle: {
        borderWidth: 0,
        marginHorizontal: 5,
        borderRadius: 10
    },
    tabTextContainerActiveStyle: {
        backgroundColor: 'red'
    },
    tabTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
        color: 'red'
    },
    tabTextActiveStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
        color: 'red'
    },
    tabWrapperStyle: {
        paddingVertical: 5,
        borderWidth: 0
    },
    tabsContainerStyle: {
        paddingHorizontal: 0,
        borderWidth: 6,
        marginTop: 80
    }
});


