import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginBottom: 22,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
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
  space: {
    marginLeft: 150,
    flexDirection: 'row'
  },
  balance: {
    color: theme.colors.white,
    fontFamily: theme.fonts.text700B,
    fontSize: 16
  },
  icons: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primaryBlueBackground,
    width: 42,
    height: 42,
    borderRadius: 10
  }
})