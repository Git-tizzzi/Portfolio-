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
      <ThemedText>Estos son mis conocimientos tecnicos.</ThemedText>
      <Collapsible title="HTML, CSS y JavaScript">
        <ThemedText>
          Conocimientos en el area de desarrollo web dinamico y estatico. 
        </ThemedText>
        <ExternalLink href="https://github.com/Git-tizzzi/VelouraProject.git">
          <ThemedText type="link">Mi proyecto de ejemplo.</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Manejo de MySQL">
        <ThemedText>
          Manejo de SQL basico, consultas, creacion de tablas y conexion a paginas web.
        </ThemedText>
      </Collapsible>
      <Collapsible title="C#">
        <ThemedText>
          Programa de control de stock y ventas para emprendimiento.
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
