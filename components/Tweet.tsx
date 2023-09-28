import { StyleSheet, Image, Text, View } from "react-native";
import { TweetType } from "../types";
import { Entypo, EvilIcons } from "@expo/vector-icons";
type TweetProps = {
  tweet: TweetType;
};
type IconButtonProps={
  icon:any,
  text?:number | string

}

const IconButton = ({icon,text}:IconButtonProps) => {
   return (
     <View style={{ flexDirection: "row", alignItems: "center" }}>
       <EvilIcons name={icon} size={22} color="gray" />
       <Text style={{ fontSize: 12, color: "gray" }}>{text}</Text>
     </View>
   );
 };

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.userImage} />

      <View style={styles.main_container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>{tweet.user.username} ·2h</Text>
          <Entypo
            name="dots-three-horizontal"
            size={18}
            color="grey"
            style={{ marginLeft: "auto" }}
          />
        </View>

        <Text style={styles.content}>{tweet.content}</Text>
        {tweet.image && (
          <Image source={{ uri: tweet.image }} style={styles.Image} />
        )}
        <View style={styles.footer}>
          <IconButton icon='comment' text={tweet.numberOfComments}/>
          <IconButton icon='retweet' text={tweet.numberOfRetweets} />
          <IconButton icon='heart' text={tweet.numberOfLikes} /> 
          <IconButton icon='chart' text={tweet.impressions} /> 
          <IconButton icon='share-apple' /> 
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 0.7,
    borderColor: "gray",
    backgroundColor: "white",
  },
  main_container: { marginLeft: 10, flex: 1 },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontWeight: "700",
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
  Image: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 10,
    marginTop: 10,
  },
  username: {
    color: "gray",
    marginLeft: 6,
  },
  footer: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent:'space-between'
  },
});

export default Tweet;
