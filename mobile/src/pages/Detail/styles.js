import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    safeareaview: {
        backgroundColor: 'black',
    },
    
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    icon: {
        position: 'absolute',
        right: 50,
    },

    headerText: {
        fontSize: 20,
        top: 3,
        color: 'red',
    },

    incidents: {
        marginTop: 25,
        padding: 24,
        borderRadius: 8,
        backgroundColor: 'rgba(0, 0, 0, .1)',
        marginBottom: 16,
        paddingBottom: 0,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: 'rgba(0, 0, 0, .1)',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 'auto',
        width: '48%',
        alignItems: 'center',
        justifyContent: "center",
        padding: 5,
    },

    links: {
        fontSize: 15,
        fontWeight: '500',
        textTransform: 'capitalize',
    }

});