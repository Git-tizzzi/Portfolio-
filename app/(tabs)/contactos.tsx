import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { TouchableOpacity, Text, Linking, Alert } from 'react-native';
import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { Button } from '@react-navigation/elements';

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
          Contactos
        </ThemedText>
      </ThemedView>
      <ThemedText>Si queres mandarme conversar conmigo, hacelo por acá.</ThemedText>
      
        <ThemedText>
          Gmail: grandiccellitiziano@gmail.com
        </ThemedText>
        <ThemedText>
          Instagram: @87tizzi
        </ThemedText>
        <ThemedText> 
        <Button color="#25b80c" onPress={abrirWhatsApp}>Mandame un Whatsapp haciendo click aqui</Button>
        </ThemedText>
        
      
    </ParallaxScrollView>
  );
}

const abrirWhatsApp = () => {
  const numero = '5491127895874';
  const mensaje = encodeURIComponent('Hola, vengo de tu app');
  const url = `https://wa.me/${numero}?text=${mensaje}`;
  Linking.openURL(`https://wa.me/${numero}?text=${mensaje}`);
};   

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
