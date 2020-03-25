import React, { ReactElement, useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { Title, Portal, Appbar, IconButton, Text, Snackbar, Menu } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { Hpane } from 'view-on-steroids'
import { goBack } from 'src/navigation'

export default function HomeContainer (): ReactElement {
  const [visible, setVisible] = useState(true)
  const [menuVisible, setMenuVisible] = useState(false)
  return (
    <SafeAreaView>
      <Portal>
        <Appbar.Header>
          <Appbar.BackAction />
          <Appbar.Content
            title='Title'
            subtitle='Subtitle'
          />
          <Appbar.Action icon='magnify' />
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <Appbar.Action color='#fff' icon='dots-vertical' onPress={() => setMenuVisible(true)} />
            }
          >
            <Menu.Item onPress={() => null} title='Refresh' />
          </Menu>
        </Appbar.Header>
        <Title>Home</Title>
        <Hpane paddingHorizontal={30}>
          <Text>React-native-vector-icons</Text>
          <Icon name='ios-add' size={30} />
        </Hpane>
        <Hpane paddingHorizontal={30}>
          <Text>React-native-paper icons</Text>
          <IconButton icon='plus' />
        </Hpane>
        <Snackbar
          action={{
            label: 'Dismiss',
            onPress: () => setVisible(false)
          }}
          onDismiss={() => setVisible(false)}
          visible={visible}
        >
          Snackbar
        </Snackbar>
      </Portal>
    </SafeAreaView>
  )
}
