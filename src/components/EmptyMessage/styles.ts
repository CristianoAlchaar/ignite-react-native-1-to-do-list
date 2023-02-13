import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 210,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        borderTopWidth: 1,
        borderTopColor: '#333333',
    },

    clipboardImg: {
        width: 56,
        height: 56,
        marginBottom: 16,
    },

    title: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 25,
    },

    subtitle: {
        color: '#808080',
        fontSize: 14,
    }
})