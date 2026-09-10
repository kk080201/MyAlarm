import { useState } from 'react'; //reactという場所からuseStateをもってくる
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'; //reactnativeからいろいろもってくる

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
    
    <Text style={styles.label}>日付</Text>
    <TextInput style={styles.input}placeholder="2026/09/20"
    value={date}
    onChangeText={setDate}/>

    <Text style={styles.label}>時刻</Text>
    <TextInput style ={styles.input}placeholder="07:30"
    value={time}
    onChangeText={setTime}/>

    <Text style={styles.label}>音</Text>
    <Text style={styles.sound}>placeholder=鳥の音</Text>

    <TouchableOpacity style={styles.button}
    onPress={registerAlarm}>
      <Text style={styles.buttonText}>アラームを登録</Text>
    </TouchableOpacity>

    {alarm !==''&&(
      <View style={styles.result}>
        <Text style={styles.resultText}>{alarm}</Text>
      </View>
    )}
  </View>  
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:30,
    paddingTop:80,
    backgroundColor:'#fff',
  },
  titile:
})