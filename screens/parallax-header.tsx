import {FunctionComponent} from "react";
import {FlatList, Text, View} from "react-native";
import {StyleSheet} from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';

const AccountsComponent: FunctionComponent = () => {
    const zings = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    const renderHeaderBelow = () => (
        <View style={{height:300,backgroundColor:'purple',flexDirection:'row',justifyContent:'center'}} >
            <Text>collapsable header</Text>
        </View>
    );
    const renderFeedItem = ({ item , index}) => (
        <View style={{height:300,backgroundColor:index%2 === 0 ? 'yellow':'red',flexDirection:'row',justifyContent:'center'}} >
            <Text>{item}</Text>
        </View>
    );


    const tabs = [
        {
            title: 'tab1',
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
            title: 'tab2',
            content: (
                <View>
                    <Text>
                        First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children componentsFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.
                    </Text>
                </View>
            )
        },
        {
            title: 'tab3',
            content: (
                <View>
                    <Text>
                        '3nFirst thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components.First thing, stop using inline function calls right now, react native thinks that the props which has inline function is a new value every-time & it causes unnecessary re-renders in its children components'
                    </Text>
                </View>
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
export default AccountsComponent;

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


