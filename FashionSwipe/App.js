import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Footer from './Components/Footer';
import Swipe from './Components/Swipe';

// Import images
import Varsity1 from './assets/clothes/Varsity1.jpg';
import Varsity2 from './assets/clothes/Varsity2.jpg';
import Varsity3 from './assets/clothes/Varsity3.jpg';
import Varsity4 from './assets/clothes/Varsity4.jpg';

const users = [
  { id: 1, name: 'John', age: 25, imageUrl: Varsity1 },
  { id: 2, name: 'Emma', age: 23, imageUrl: Varsity2 },
  { id: 3, name: 'Michael', age: 27, imageUrl: Varsity3 },
  { id: 4, name: 'Sophia', age: 24, imageUrl: Varsity4 }
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleLike = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const handleDislike = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let pageContent;
  switch (currentPage) {
    case 1:
      pageContent = <Text>Page 1 Content</Text>;
      break;  
    case 2:
      pageContent = (
        <View key={users[currentIndex].id} style={styles.card}>
          <Image source={users[currentIndex].imageUrl} style={styles.image} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>{users[currentIndex].name}, {users[currentIndex].age}</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity onPress={handleDislike} style={[styles.actionButton, styles.dislikeButton]}>
              <Text style={styles.actionText}>Dislike</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLike} style={[styles.actionButton, styles.likeButton]}>
              <Text style={styles.actionText}>Like</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
      break;
    case 3:
      pageContent = <Text>Page 3 Content</Text>;
      break;
    default:
      pageContent = null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {pageContent}
      <Footer onPageChange={handlePageChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    width: '80%',
    height: '60%',
  },
  image: {
    width: '100%',
    height: '70%',
  },
  userInfo: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  actionButton: {
    borderRadius: 8,
    padding: 10,
    width: '45%',
    alignItems: 'center',
  },
  dislikeButton: {
    backgroundColor: '#E64C3C',
  },
  likeButton: {
    backgroundColor: '#4CAF50',
  },
  actionText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});