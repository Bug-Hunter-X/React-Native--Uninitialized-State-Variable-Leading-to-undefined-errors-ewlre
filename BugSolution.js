// BugSolution.js
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  const [count, setCount] = useState(0); // Initialize with default value

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <View>
      {/* Conditional rendering to handle undefined state (although unlikely here) */}
      {count !== undefined && (
        <Text>Count: {count}</Text>
      )}
      <Text onPress={incrementCount}>Increment</Text>
    </View>
  );
};

export default MyComponent;