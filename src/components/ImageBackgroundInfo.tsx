import React from 'react';
import {
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GradientBgIcon from './GradientBgIcon';
import {COLORS, FONTSIZE, SPACING} from '../theme/theme';

interface ImageBackgroundInfoProps {
  EnableBackhandler: boolean;
  imageLinkPortrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingredient: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  BackHandler?: any;
  ToggleFavourite: any;
}

const ImageBackgroundInfo = ({
  EnableBackhandler,
  imageLinkPortrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredient,
  average_rating,
  ratings_count,
  roasted,
  BackHandler,
  ToggleFavourite,
}: ImageBackgroundInfoProps) => {
  return (
    <View>
      <ImageBackground
        source={imageLinkPortrait}
        style={styles.ItemBackgroundImage}>
        {EnableBackhandler ? (
          <View style={styles.ImageHeaderbarContainerWithBack}>
            <TouchableOpacity onPress={BackHandler}>
              <GradientBgIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, type, id);
              }}>
              <GradientBgIcon
                name="like"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.ImageHeaderbarContainerWithoutBack}>
            <TouchableOpacity
              onPress={() => {
                ToggleFavourite(favourite, type, id);
              }}>
              <GradientBgIcon
                name="like"
                color={
                  favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ItemBackgroundImage: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
  ImageHeaderbarContainerWithBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImageHeaderbarContainerWithoutBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default ImageBackgroundInfo;
