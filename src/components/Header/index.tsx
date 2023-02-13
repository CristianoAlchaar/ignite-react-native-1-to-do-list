import { Image, View } from 'react-native'
import { styles } from './styles'

export function Header(){
    const { container } = styles

    return(
        <View style={container}>
            <Image  source={require('../../../assets/logo.png')} alt="" />
        </ View>
    )
}