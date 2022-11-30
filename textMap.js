import React from 'react';
import {
  Alert,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

const TextMap = ({blocks, showWords, showBlocks}) => {
  return blocks?.map(block => (
    <React.Fragment key={block.text}>
      <>
        <TouchableOpacity
          onPress={() => Alert.alert(block.text)}
          style={[styles.text, block.frame]}
        />
        <Text style={[styles.boldText, block.frame]}>{block.text}</Text>
      </>

      {block?.lines?.map(line =>
        line.elements.map(el => (
          <>
            <TouchableOpacity
              onPress={() => Alert.alert(el.text)}
              key={Math.random()}
              style={[styles.text, el.frame]}
            />
            <Text>{el.text}</Text>
          </>
        )),
      )}
    </React.Fragment>
  ));
};

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    backgroundColor: 'rgba(27, 114, 232, 0.25)',
    borderRadius: 5,
  },
  boldText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TextMap;
