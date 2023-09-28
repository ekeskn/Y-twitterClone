import { StyleSheet, Image, Text, View } from "react-native";
import { TweetType } from "../types";
import { Entypo} from "@expo/vector-icons";
import IconButton from "./IconButton";
type TweetProps = {
  tweet: TweetType;
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
          <IconButton icon='chart' text={tweet.impressions || 0} /> 
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
