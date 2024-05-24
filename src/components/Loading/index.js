import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../../color";

const LoadingScreen = ({ visible }) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setRotationAngle((angle) => angle + 15);
      }, 1);

      return () => clearInterval(interval);
    }
  }, [visible]);

  const iconStyle = {
    transform: [{ rotate: `${rotationAngle}deg` }],
  };

  return visible ? (
    <View style={styles.loadingContainer}>
      <Icon name="loading1" size={80} color={colors.primary} style={iconStyle} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});

export default LoadingScreen;
