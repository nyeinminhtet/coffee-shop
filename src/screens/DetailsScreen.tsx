import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useStore} from '../store/store';
import {COLORS} from '../theme/theme';

const DetailsScreen = ({navigation, route}: any) => {
  const ItemofIndex = useStore((state: any) =>
    route.params.type === 'Coffee' ? state.Coffee : state.BeanList,
  )[route.params.index];

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}></ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
});
