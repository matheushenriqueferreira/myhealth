import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ADD4D0',
    paddingHorizontal: 15
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    marginVertical: 25
  },
  
  searchText: {
    color: '#3F92C5',
    textAlign: 'center',
    marginVertical: 25,
    fontSize: 16
  },

  searchIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10
  },

  inputStyle: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    color: '#3F92C5'
  },

  btnContainer: {
    alignItems: 'center',
    marginVertical: 45
  },
});