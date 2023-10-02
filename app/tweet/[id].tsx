import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function TweetScreen() {
  const {id} = useGlobalSearchParams()
  console.warn(id)   
  const tweet = tweets.find(t => t.id ===id)

  if(!tweet){
    return <Text>Tweet {id} not fould</Text>
  }
  return <Tweet tweet={tweet} />;
}
