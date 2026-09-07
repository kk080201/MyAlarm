import { useState } from 'react';//reactという場所からuseStateをもってくる
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';//reactnativeからいろいろもってくる

export default function HomeScreen() {//HomeScreenという画面を作る（このファイルをメインとして、このHomeScreenを外から使えるようにする）
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [alarm, setAlarm] = useState('');//それぞれデータをユーザに登録してもらうってこと

  const registerAlarm = () => {//アラームを登録する処理を作るという意味、すでに保存されているdateとtimeを使う
    if (!date || !time) {
      return;//dateかtimeが空っぽだったら何もしないで戻る（!○○は○○が空っぽだったらという意味で||はまたは）
    }
  
  setAlarm('${date}  ${time}');//ユーザがどっちも登録してる場合はその登録してるdateとtimeをいれる
  };

  return (//この画面にはこれを表示します
    <View style={styles.container}>
      <Text style={styles.title}>MyAlarm</Text>


  )
}