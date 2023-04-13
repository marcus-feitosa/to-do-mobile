import { View, Image } from 'react-native'
import LogoImg from '../../assets/Logo.png'
import { styles } from './styles'

export function Header(){
    return(
    <View style={styles.container}>
        <Image  source={LogoImg} style={styles.logoImg} />
    </View>)
}