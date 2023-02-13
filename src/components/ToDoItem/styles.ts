import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 12,
        paddingBottom: 12,
        marginBottom: 8,
        minHeight: 64,
        backgroundColor: '#262626',
        border: '1 solid #333333',
        borderRadius: 8,
        flexAlign: 'center',
        justifyContent: 'space-around',
    },
    checkbox: {
        maxWidth: '80%',
        paddingLeft: 6,
        paddingRight: 6,
    },
    icon: {
        width: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})