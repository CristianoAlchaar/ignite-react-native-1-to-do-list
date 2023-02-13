import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        top: -28,
        paddingLeft: 24,
        paddingRight: 24,
        flex: 1
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    input: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        color: '#F2F2F2',
        padding: 16,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#0D0D0D',
        borderRadius: 6,
    },

    button: {
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },

    dataContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 32,
        marginBottom: 25,
    },

    dataItemContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    created: {
        color: '#4EA8DE',
        fontWeight: '700',
        fontSize: 16,
    },

    concluded:{
        color: '#8284FA',
        fontWeight: '700',
        fontSize: 16,
    },

    numberContainer: {
        width: 32,
        height: 22,
        color: '#D9D9D9',
        fontWeight: '700',
        fontSize: 14,
        backgroundColor: '#333333',
        borderRadius: 50,
        marginLeft: 10,
        textAlign: 'center',
    }
})