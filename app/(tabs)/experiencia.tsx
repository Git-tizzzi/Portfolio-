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
          Habilidades
        </ThemedText>
      </ThemedView>
      <ThemedText>Estas son algunas de mis proyectos y/o experiencias</ThemedText>
      <Collapsible title="Manejo de Excel en Molinos Central Norte.">
        <ThemedText>
          Manejo basico de Excel en el puesto de oficina tecnica.
        </ThemedText>
        
        <ExternalLink href="https://molinocentralnorte.com.ar/">
          <ThemedText type="link">Mas informacion de Molinos Central Norte aqui!</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Desarrollador Web">
        <ThemedText>
          Desarrollo de pagina web para emprendimiento "Maribet" de venta de ropa y accesorios para niños.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Desarrollador Backend">
        <ThemedText>
          Desarrollo de software de control de stock para el emprendimiento ya mencionado "Maribet".
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
