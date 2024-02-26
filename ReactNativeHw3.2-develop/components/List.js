import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View, Text } from "react-native";
import Main from "./Main";

const List = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.miniText}>Back</Text>
        <Text style={styles.largeText}>Feed</Text>
        <Text style={styles.miniText}>Filter</Text>
      </View>
      <View style={styles.search}>
        <Text style={{ fontSize: 20, color: "#bfbfbf" }}>Search</Text>
      </View>
      <FlatList
        data={mockData}
        renderItem={({ item }) => {
          return <Main image={item.image} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 80,
    alignItems: "center",
  },
  miniText: {
    fontSize: 16,
    lineHeight: 19.36,
    color: "#5DB075",
  },
  largeText: {
    fontSize: 30,
    lineHeight: 36.31,
    fontWeight: 600,
  },
  search: {
    padding: 10,
    width: "100%",
    height: 50,
    borderRadius: 25,
    alignItems: "flex-start",
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    borderColor: "#bfbfbf",
    borderWidth: 2,
    marginTop: 30,
    marginBottom: 30,
  },
});

const mockData = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default List;
