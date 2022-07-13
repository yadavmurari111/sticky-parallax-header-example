import React from 'react'
import {View, StyleSheet, ListRenderItem, Text} from 'react-native'
import { Tabs } from 'react-native-collapsible-tab-view'

const HEADER_HEIGHT = 250

const DATA = [0, 1, 2, 3, 4,5,6,7,8]
const identity = (v: unknown): string => v + ''



const TabOneScreen: React.FC = () => {
  const renderItem: ListRenderItem<number> = React.useCallback(({ index }) => {
    return (
        <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
    )
  }, [])
    const Header = () => {
        return <View pointerEvents="box-none" style={styles.header} ><Text>header</Text></View>
    }
  return (
      <Tabs.Container  snapThreshold={1} allowHeaderOverscroll renderHeader={Header}>
          <Tabs.Tab name="tab1">
              <Tabs.FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={identity}
              />
          </Tabs.Tab>
          <Tabs.Tab name="tab2">
              <Tabs.FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={identity}
              />
          </Tabs.Tab>
          <Tabs.Tab name="tab3">
              <Tabs.FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={identity}
              />
          </Tabs.Tab>
          <Tabs.Tab name="tab4">
              <Tabs.FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={identity}
              />
          </Tabs.Tab>

      </Tabs.Container>
  )
}

const styles = StyleSheet.create({
  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: 'red',
  },
  boxB: {
    backgroundColor: '#D8D8D8',
  },
  header: {
    height: HEADER_HEIGHT,
    width: '100%',
      alignItems:'center',justifyContent:'center',
    backgroundColor: '#2196f3',
  },
})

export default TabOneScreen
