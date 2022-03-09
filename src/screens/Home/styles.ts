import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    color: theme.colors.white,
    fontSize: 20
  },
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
  }
})