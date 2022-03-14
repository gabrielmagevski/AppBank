import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 22,
  },
  content: {
    marginTop: 22,
    justifyContent: 'flex-start',
    padding: 20,
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modal: {
    backgroundColor: theme.colors.primaryBlueBackground,
    marginTop: 350,
    margin: 0,
    padding: 20,
   
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  button: {
    color: theme.colors.white,
    backgroundColor: theme.colors.secondaryBlueBackground,
    fontFamily: theme.fonts.text400,
    
    fontSize: 20,
    borderRadius: 5,
    marginTop: 100,
  },
  title: {
    color: theme.colors.white,
    fontFamily: theme.fonts.text400,
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 0,
    alignItems: 'center',

    borderWidth: 3,
    borderColor: theme.colors.white
  },
  informations: {
    color: theme.colors.white,
    fontFamily: theme.fonts.text400,

    fontSize: 14,
    lineHeight: 20,
  },
  contentInvest: {
    marginTop: 30,
  },
  balance: {
    color: theme.colors.white,
    fontFamily: theme.fonts.text700B,
    fontSize: 16
  },
  subtitle: {
    color: theme.colors.white,
    fontFamily: theme.fonts.text700B,
    fontSize: 20,
    marginTop: 5,
  },
})