import {StyleSheet} from 'react-native';
import { theme } from '../../theming';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(33, 33, 33, 0.40)',
  },
  addtoCartModal: {
    width: '75%',
    height: 220,
    margin: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    paddingHorizontal: '9%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: theme.colors.primary,
    textAlign: 'center',
    marginTop: 10,
  },
  dashboardBtn: {
    marginTop:10,
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  crossBtn: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  continueBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  continueText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: theme.colors.primary,
    textAlign: 'center',
  },
  rightArrow: {
    width: 7,
    height: 12,
    marginLeft: 10,
  },
  checkoutPickup: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: theme.colors.lightGrey,
    textAlign: 'center',
  },
  checkoutPick: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    color: theme.colors.primary,
    textAlign: 'center',
  },
});
