import { StyleSheet } from "react-native";

export const NavbarComponentStyle = StyleSheet.create({
  navbar: {
    width: '100%',
    height: 60,
  },
  
  navbarContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#C1E7E3',
    paddingHorizontal: 10
  },
  
  displayFlex: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  navbarIcon: {
    width: 35,
    height: 30
  },

  title: {
    fontSize: 36,
    color: '#419ED7',
    marginLeft: 10
  }
});