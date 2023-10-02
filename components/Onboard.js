import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import colors from "../assets/colors/colors";

const data = [
  {
    title: "Добро пожаловать в Palomniki!",
    text: "Добро пожаловать в Palomniki, ваше путешествие в священные земли Ислама — Мекку и Медину. Это приложение проведет вас через незабываемое путешествие, где вы сможете исследовать все, начиная от мечетей, ресторанов и музеев, и заканчивая обрядами Хаджа и Умры.",
    image: require("../assets/images/Onboard1.png"),
  },
  {
    title: "Путешествие в глубины Ислама",
    text: "С Palomniki вы отправитесь в удивительное путешествие в сердце Ислама, в Мекку и Медину. Помолитесь в величественной атмосфере священных мечетей, следуйте стопам Пророка и переживите духовный опыт в этих благословенных местах.",
    image: require("../assets/images/Onboard2.png"),
  },
  {
    title: "Подробное руководство и информация",
    text: "Наше приложение предоставит вам всестороннее руководство на каждом этапе. Пошагово изучите обряды Хаджа и Умры, познакомьтесь с историей и культурой Ислама, получите советы для посещения значимых мест и сделайте ваш опыт незабываемым.",
    image: require("../assets/images/Onboard3.png"),
  },
];

const Onboard = (props) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderDoneButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Сделано</Text>
      </View>
    )
  };
  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Следующий</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Предыдущий</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.handleDone();
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={data}
        onDone={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 60,
  },
  title: {
    fontSize: 24,
    color: colors.black,
    textAlign: "center",
    marginHorizontal: 60,
  },
  text: {
    fontSize: 14,
    // color: colors.gray,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  rightTextWrapper: {
    width: 81,
    height: 50,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightText: {
    color: colors.green,
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 91,
    height: 50,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftText: {
    color: colors.green,
    fontSize: 14,
  },
  dotStyle: {
    backgroundColor: colors.green
  },
  activeDotStyle: {
    backgroundColor: colors.greenFaded
  },
});

export default Onboard;
