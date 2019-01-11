import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    money: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20,
    },
    text: {
        color: "#333333",
        fontSize: 16,
        paddingTop: 5,
        paddingLeft: 5
    },
    viewMenu: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#192a56',
    },
    menu: {
        backgroundColor: '#192a56',
        color: '#FFF',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
    },
    texto: {
        color: '#FFF',
        fontWeight: 'normal'
    },
    icon: {
        marginTop: 50,
        color: 'red'
    },
    aircraft: {
        width: wp('80%'),
        height: 200,
        marginLeft: wp('10%'),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    head: { height: 30, },
    header: { height: 40, backgroundColor: '#353b48' },
    textHeader: { textAlign: 'center', fontWeight: '100', color: '#FFF' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
}