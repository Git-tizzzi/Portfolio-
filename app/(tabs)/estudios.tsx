import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Estudios.
        </ThemedText>
      </ThemedView>
      <ThemedText>Estos son mis estudios.</ThemedText>
      <Collapsible title="Secundario">
        <ThemedText>
          Cursando 7° año en la carrera de programación en la secundaria EEST N° Manuel Mateo. 
        </ThemedText>
        <ExternalLink href="https://maps.app.goo.gl/S14R1d6VodUhK5vq7">
          <ThemedText type="link">Mi colegio.</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Inglés">
        <ThemedText>
          Cursando inglés en el nivel B1
        </ThemedText>
      </Collapsible>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
