import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import StarRating from 'react-native-star-rating';

const PatienHome = props => {
  const {data, id} = props.route.params;
  // console.log(name);

  const images = [
    require('../src/assets/1600w-o3BuvnPgn2s.webp'),
    require('../src/assets/images.png'),
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, {marginTop: -50, width: '100%'}]}>
        <Text style={styles.headerText}>Home</Text>
      </View>

      {/* Slider */}
      <SliderBox
        images={images}
        autoplay={true}
        circleLoop={true}
        autoPlayInterval={2000}
        dotColor="#00A040"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxStyle={{
          position: 'absolute',
          bottom: 0,
          padding: 0,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
        }}
      />

      {/* Search Input */}
      <TextInput style={styles.searchInput} placeholder="Search" />

      {/* Content */}
      <View style={styles.flatListContainer}>
        <FlatList
          keyExtractor={item => item.id}
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.remedyContainer}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('Remedy', {
                      Nuskhaid: item.Nuskhaid,
                      Nuskhaname: item.NuskhaName,
                      id,
                    })
                  }
                  style={styles.remedyItemContainer}>
                  <View style={styles.remedyDetailsContainer}>
                    <Text style={styles.remedyTitle}>
                      Nuskhaid:{item.Nuskhaid}
                    </Text>
                    <Text style={styles.remedyTitle}>
                      Disease:{item.DiseaseName}
                    </Text>
                    <Text style={styles.remedyTitle}>
                      Hakeem name:{item.hakeemname}
                    </Text>
                    <Text style={styles.remedyTitle}>
                      {' '}
                      Nuskha:{item.NuskhaName}
                    </Text>

                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={4}
                      starSize={20}
                      fullStarColor={'gold'}
                      emptyStarColor={'gray'}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    // paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#00A040',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  flatListContainer: {
    flex: 1,
    marginHorizontal: '5%', // Set margin on both sides
  },
  remedyContainer: {
    marginVertical: '2%', // Set vertical margin
  },
  remedyItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    marginHorizontal: '2%', // Set horizontal margin
    padding: '3%', // Set padding
  },
  remedyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  remedyDescription: {
    fontSize: 14,
    marginTop: '1%', // Set margin between title and description
  },
  searchInput: {
    backgroundColor: 'lightgrey',
    marginBottom: 20,
    width: '80%',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginLeft: 30,
  },
  scrollView: {
    flex: 1,
  },
  itemContainer: {
    elevation: 5,
    backgroundColor: '#ffffff', // changed to white background
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20, // increased padding
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginBottom: 5,
    color: 'black',
    fontSize: 20, // increased font size
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 5,
    color: 'grey',
    fontSize: 16,
  },
  disease: {
    color: 'grey',
    fontSize: 16,
    marginBottom: 5,
  },
  rank: {
    color: 'green', // changed color to green
    fontSize: 14,
  },
});

export default PatienHome;
