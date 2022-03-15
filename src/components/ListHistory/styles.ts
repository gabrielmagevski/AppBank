import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';


export const styles = StyleSheet.create({
  backgroundfull: {
    backgroundColor: theme.colors.primaryBlueBackground,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 10
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 30,
    width: '100%'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  primarytitle:{
    color: theme.colors.white,
    fontSize: 17,
    fontFamily: theme.fonts.text700B,
    marginBottom: 20,
  },
  title: {
    color: theme.colors.white,
    fontSize: 15,
    fontFamily: theme.fonts.text400,
  },
  subtitle: {
    color: theme.colors.white,
    fontSize: 13,
    fontFamily: theme.fonts.text300,
  },
  valuetitle:{
    color: theme.colors.white,
    fontSize: 14,
    fontFamily: theme.fonts.text700B
  },
  space: {
    marginLeft: 130,
    flexDirection: 'row'
  },
  icon: {
    paddingRight: 10,
  }
})