import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 249,
    height: 54,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 249,
    height: 54,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white
  },
  title: {
    color: theme.colors.white,
    fontFamily: theme.fonts.text700B,
    fontSize: 18
  }
})