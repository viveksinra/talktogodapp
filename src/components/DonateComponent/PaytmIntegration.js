import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AllInOneSDKManager from 'paytm_allinone_react-native';
import { useTranslation } from 'react-i18next';

const PaytmIntegration = ({ amount, isStaging }) => {
  const { t } = useTranslation();

  const generateOrderId = () => {
    const now = new Date();
    const year = now.getFullYear() % 100; // Get last 2 digits of the year
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
    const day = now.getDate().toString().padStart(2, '0');
    const randomDigits = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  
    return `${year}${month}${day}${randomDigits}`;
  };

  const handlePaytmPayment = async () => {
    const orderId = generateOrderId();
    const txnToken = generateOrderId(); // Implement a function to generate a unique txnToken
    const callbackUrl = `https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=${orderId}`;

    try {
      const result = await AllInOneSDKManager.startTransaction(
        orderId,
        'mdkLgp26456100036022',
        txnToken,
        amount.toString(),
        callbackUrl,
        isStaging,
        true
      );

      console.log('Payment success:', result);
      Alert.alert('Payment Success', 'Your payment was successful.');
    } catch (error) {
      console.error('Payment error:', error);
      Alert.alert('Payment Error', 'There was an error processing your payment. Please try again.');
    }
  };

  return (
    <TouchableOpacity style={styles.donateButton} onPress={handlePaytmPayment}>
      <Text style={styles.donateButtonText}>{t('donate.buttom')}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    input: {
      flex: 1,
      height: 60,
      backgroundColor: '#fff',
      borderColor: '#ccc',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 10,
      fontSize: 28,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#fff',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 18,
      marginBottom: 30,
      color: '#fff',
      textAlign: 'center',
    },
    donateButton: {
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 30,
      backgroundColor: '#fff',
    },
    donateButtonText: {
      color: '#2a80eb',
      fontWeight: 'bold',
      fontSize: 18,
    },
    amountContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
  },
      icon: {
          marginHorizontal: 10,
          },
      }
          
          );

export default PaytmIntegration;
