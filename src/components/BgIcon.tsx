import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BORDERRADIUS, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface Props {
  name: string;
  color: string;
  size: number;
  BgColor: string;
}

const BgIcon = ({name, color, size, BgColor}: Props) => {
  return (
    <View style={[styles.IconBg, {backgroundColor: BgColor}]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  );
};

export default BgIcon;

const styles = StyleSheet.create({
  IconBg: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_8,
  },
});
