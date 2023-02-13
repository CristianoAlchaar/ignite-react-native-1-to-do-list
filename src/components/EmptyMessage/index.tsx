import { Image, View, Text } from 'react-native'
import { styles } from './styles'

export function EmptyMessage(){
    const { container, clipboardImg, title, subtitle } = styles
    return(
        <View style={container}>
            <Image source={require('../../../assets/clipboard.png')} style={clipboardImg} />
            <Text style={title}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={subtitle}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}