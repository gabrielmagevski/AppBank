import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../styles/theme';


export const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 22,
  },
  icon: {
    marginTop: -60
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  headerTitle: {
    marginTop: 10,

    color: theme.colors.white,
    fontFamily: theme.fonts.text700B,
    fontSize: 18,
  },
  button: {
    color: theme.colors.white,
    backgroundColor: theme.colors.secondaryBlueBackground,
    fontFamily: theme.fonts.text400,
    
    fontSize: 20,
    borderRadius: 5,
    marginTop: 100,
  },
})