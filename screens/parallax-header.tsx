import type {VFC} from 'react';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabbedHeaderPager} from 'react-native-sticky-parallax-header';

const text = {
    biography: `The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price. ...The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price. ...The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price. ...The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price. ...The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price. ...The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price. ...The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price. ...The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price. ...The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price. ...The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price. ...The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price. ...`,
    powers:
        'Grog was able to harness the mystical energies of the Force on account of being Force-sensitive. One notable display of his power was when he telekinetically lifted a giant mudhorn into the air for a brief time to save Djarin from the charging beast. ...',
    appearances: `
  Star Wars: Galaxy of Heroes
  Star Wars: Squadrons (as toy) (DLC)
  The-Mandalorian-logo.png The Mandalorian - "Chapter 1: The Mandalorian" (First appearance)
  ...Star Wars: Galaxy of Heroes
  `,
};
const zings = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
const TABS = [
    {
        title: 'Biography',
        description: text.biography,
    },
    {
        title: 'Powers and Abilities',
        description: text.appearances,
    },
    {
        title: 'Appearances',
        description: <View
            style={{
                height: 300,
                backgroundColor:  'red' ,
                margin:10
            }}
        />,
    },
];




const YodaScreen: VFC = () => {

    return (
        <TabbedHeaderPager
            backgroundImage={{
                uri: 'https://yoda.jpeg',
            }}
            title="Baby Yoda"
            titleStyle={styles.titleStyle}
            foregroundImage={{
                uri: 'https://starwars.png',
            }}
            tabs={TABS}
            tabsContainerBackgroundColor={"black"}
            tabTextContainerStyle={styles.tabTextContainerStyle}
            tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
            tabTextStyle={styles.tabText}
            tabTextActiveStyle={styles.tabTextActiveStyle}
            tabWrapperStyle={styles.tabWrapperStyle}
            tabsContainerStyle={styles.tabsContainerStyle}

        >
            {TABS.map((tab, i) => (
                <View key={i} >
                    {zings.map((item,j)=><View
                        style={{
                            height: 300,
                            flexDirection:'row',justifyContent:'center',
                            backgroundColor: i===1? 'red':'purple' ,
                            margin:20
                        }}
                    ><Text>{item}</Text></View>)}
                </View>
            ))}
        </TabbedHeaderPager>
    )
};
export default YodaScreen;
const styles = StyleSheet.create({
    tabTextContainerStyle: {
        backgroundColor: 'transparent',
        borderRadius: 18,
    },
    tabTextContainerActiveStyle: {
        backgroundColor: 'orange',
    },
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        fontSize: 40,
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    tabText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    tabTextActiveStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    tabWrapperStyle: {
        paddingVertical: 10,
    },
    tabsContainerStyle: {
        paddingHorizontal: 10,
    },
})


