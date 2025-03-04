import React from 'react';
import { I18nManager, Text, View } from 'react-native';
import { styles } from './styles';
import TouchableText from '@atoms/TouchableText';
import TextView from '@atoms/TextView';
import Swiper from 'react-native-swiper';

const Home = (props: any): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <TextView text={'Home'} />
      <TouchableText
        text={'Go To Profile'}
        onPress={() => {
          props.navigation.navigate('DrawerRoot', {
            screen: 'Profile',
            initial: false,
          });
        }}
      />
      <TouchableText
        text={'change language'}
        onPress={() => { I18nManager.forceRTL(false) }}
      />

      <Swiper
        style={styles.wrapper}
        showsPagination={false}
        showsButtons={false}
        autoplay
        loop
        directionalLockEnabled={true}
        disableIntervalMomentum
        horizontal
        removeClippedSubviews
        bounces
        bouncesZoom
        disableScrollViewPanResponder
        autoplayDirection={I18nManager.isRTL ? false : true}
        alwaysBounceHorizontal
        fadingEdgeLength={1}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    </View>
  );
};

export default Home;
