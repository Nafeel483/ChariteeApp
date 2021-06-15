import { StyleSheet, Dimensions, Platform } from 'react-native';
import Metrics from '../../../Styles/Metrices';
import Colors from '../../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: 'white'
  },
  mainHeader: {
    flexDirection: 'row',
    marginTop: 25,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  indecatorStyle: {
    width: 30,
    height: 30,
  },
  donateText: {
    fontSize: 21,
    marginTop: 2,
    fontWeight: '500',
    color: Colors.primary,
  },
  donateText1: {
    fontSize: 21,
    fontWeight: '500',
    color: Colors.White,
  },
  paymentContainer: {
    marginTop: 20,
    marginBottom: 20
  },
  showPaymentWrapper: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: 15,
    borderWidth: 1,
    height: 70,
    alignItems: "center"
  },
  mainProfileWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#F5F8FC'
  },
  mainProfileWrapper1: {
    width: 25,
    height: 25,
  },
  rightArrowStyle: {
    width: 140,
    height: 45,
    marginLeft: 15,
    marginTop: -8
  },
  logoWrapper: {
    width: 100,
    height: 30,
    marginLeft: 15,
    // marginTop: 5
  },
  logoWrapper1: {
    width: 60,
    height: 20,
    marginLeft: 15,
    marginTop: 4
  },
  logoWrapper2: {
    width: 130,
    height: 20,
    marginTop: 6,
    marginLeft: 15,
  },
  logoWrapper3: {
    width: 100,
    height: 30,
    // marginTop: 2,
    marginLeft: 15,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 13,
    color: '#6D7E92'
  },
  titleTextSave: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
    // marginTop: 13,
    color: '#6D7E92'
  },
  titleTextSave11: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 13,
    color: '#6D7E92',
    width: '88%',
    alignSelf: 'center',
    textAlign: 'center'
  },
  donateButton: {
    width: widthScreen / 1.12,
    height: 55,
    backgroundColor: Colors.appHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: '20%'
  },
  cvvButton: {
    width: '90%',
    height: 55,
    backgroundColor: Colors.appHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    alignSelf: "center",
    marginBottom: 12,
    marginTop: 30
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.White
  },
  rightArrowStyle1: {
    width: 27,
    height: 13,
    marginTop: 6,
    marginLeft: 10
  },
  titleText1: {
    fontSize: 12,
    fontWeight: '500',
    // marginLeft: 10,
    marginTop: 15,
    color: '#6D7E92',
    width: '88%',
    alignSelf: "center"
  },
  headerText: {
    fontSize: 19,
    fontWeight: '500',
    marginLeft: 10,
    marginBottom: 15,
    marginTop: 25,
    width: '90%',
    alignSelf: "center"
  },
  mainScreenConatiner: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 20
  },
  inputWrapper: {
    height: 50,
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },
  inputWrapper1: {
    height: 50,
    width: widthScreen / 2.35,
    alignSelf: 'center',
  },
  modalCont1: {
    height: 330,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: 12,
    overflow: 'hidden',
  },
  cvvText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600'
  }
});
export default styles;  