// import React from 'react';
// import { Text, View } from 'react-native';
// import GridView from 'react-native-gridview';

// const itemsPerRow = 3;

// // Use data from an array...
// const data = Array(20)
//   .fill(null)
//   .map((item, index) => index + 1);

// // ...or create your own data source.
// // This will randomly allocate 1-3 items per row, and will be used
// // if the `randomizeRows` prop is `true`.
// const randomData = [];
// for (let i = 0; i < data.length; i) {
//   const endIndex = Math.max(Math.round(Math.random() * itemsPerRow), 1) + i;
//   randomData.push(data.slice(i, endIndex));
//   i = endIndex;
// }
// const dataSource = new GridView.DataSource({
//   rowHasChanged: (r1, r2) => r1 !== r2,
// }).cloneWithRows(randomData);

// export default function ProductList(props) {
//   return (
//     <GridView
//       data={data}
//       dataSource={props.randomizeRows ? dataSource : null}
//       itemsPerRow={itemsPerRow}
//       renderItem={(item, sectionID, rowID, itemIndex, itemID) => {
//         return (
//           <View style={{ flex: 1, backgroundColor: '#8F8', borderWidth: 1 }}>
//             <Text>{`${item} (${sectionID}-${rowID}-${itemIndex}-${itemID})`}</Text>
//           </View>
//         );
//       }}
//     />
//   );
// }

import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import GridList from 'react-native-grid-list';

const items = [
  { thumbnail: { uri: 'https://lorempixel.com/200/200/animals' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/city' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' } },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' } },
];

export default class ProductList extends Component {
  renderItem = ({ item, index }) => (
    <Image style={styles.image} source={item.thumbnail} />
  );

  render() {
    return (
      <View style={styles.container}>
        <GridList
          showSeparator
          data={items}
          numColumns={3}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});