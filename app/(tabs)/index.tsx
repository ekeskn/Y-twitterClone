import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import Tweet from "../../components/Tweet";
import { Entypo } from "@expo/vector-icons";
import tweets from "../../assets/data/tweets";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      <Pressable style={styles.floatingButton}>
        <Entypo name="plus" size={24} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { 
    backgroundColor: "white",
    flex: 1,
  },
  floatingButton: {
    backgroundColor: "#1C9BF0",
    width: 50,
    height: 50,
    alignItems: "center",
    borderRadius: 50,
    justifyContent: "center",
    position:'absolute',
    right:25,
    bottom:25
  },
});
