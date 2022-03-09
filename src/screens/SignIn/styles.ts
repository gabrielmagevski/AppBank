import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  title: {
    fontFamily: theme.fonts.text400,
    fontSize: 18,
    color: theme.colors.white
  },
  subtitle: {
    marginTop: 20,
    fontSize: 13,
    color: theme.colors.white,
    textAlign: 'center',
  },
  inputsgroups: {
    marginTop: 50,
    marginBottom: 10
  },
  titlesGroups: {
    marginTop: 20,
  },
  help: {
    fontFamily: theme.fonts.text700B,
    color: theme.colors.white,
    textAlign: 'center',
    fontSize: 13
  },
  image: {
    width: 95,
    height: 95,
    borderRadius: 50
  }
})