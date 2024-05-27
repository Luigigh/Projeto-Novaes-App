import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../../color";

const LoadingScreen = ({ visible }) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setRotationAngle((angle) => angle + 5);
      }, 1);

      return () => clearInterval(interval);
    }
  }, [visible]);

  const iconStyle = {
    width: 150,
    height: 150,
    tintColor: colors.primary,
    transform: [
      {
        rotate: `${rotationAngle}deg`,
      },
    ],
  };

  return visible ? (
    <View style={styles.loadingContainer}>
      <Image
        source={require("../../img/LogoDesenhoBranca.png")}
        style={iconStyle}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default LoadingScreen;
