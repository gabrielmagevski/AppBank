import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    height: 54,
    margin: 12,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: theme.colors.white,
    width: 249,
    paddingLeft: 20,
    color: theme.colors.white,
  }
})