import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useAuthStore } from "../store/authStore";

export default function Index() {
  const { user, token } = useAuthStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Image src />
      <Link href="/(auth)/signup">Signup</Link>
      <Link href="/(auth)">Login</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { color: "blue" },
});
