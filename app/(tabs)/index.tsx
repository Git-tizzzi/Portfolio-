import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImageOverlap
      headerImage={
        <>
        <Image
        source={require('@/assets/images/teclado.jpg')}
        style={styles.teclado}
        contentFit="cover"
        />
        <Image
          source={require('@/assets/images/Portfolio.png')}
          style={styles.fotoPerfil}
          contentFit="cover"
        />
        </>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{textAlign: 'center'}}>Portfolio de Tiziano Grandiccelli</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={{textAlign: 'center'}}>Bienvenido a mi portfolio!</ThemedText>
        <ThemedText style={{textAlign: 'center'}}>
          Soy Tiziano Grandiccelli, tengo 19 años, vivo en Alejandro Korn, Buenos Aires, Argentina.
        
        </ThemedText>
          
      </ThemedView>
            <ThemedText type="subtitle" style={{textAlign: 'center'}}>
              Si queres saber mas sobre mi, podes navegar por mi pagina en Habilidades, aqui abajo!
            </ThemedText>
          
          
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  teclado: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  fotoPerfil: {
    width: 150,
    height: 150,
    borderRadius: 75,
    position: 'absolute',
    bottom: -65,
    left: '50%',
    marginLeft: -65,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center'
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    justifyContent: 'center'
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
