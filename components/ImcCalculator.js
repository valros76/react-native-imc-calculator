import React, { useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input as ElementsInput } from '@rneui/base';

const ImcCalculator = () => {
   const [size, setSize] = useState('')
   const [weight, setWeight] = useState('')
   const [imc, setImc] = useState(0)
   const [result, setResult] = useState('')

   const [refreshing, setRefreshing] = React.useState(false);

   const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
         setRefreshing(false);
      }, 2000);
   }, []);

   const calculateIMC = (size, weight) => {
      // IMC = ((poids * 10000) / (taille * taille))
      let imc = (Number(weight) * 10000) / (Number(size) * Number(size))
      imc = Number(imc).toFixed(1)
      setImc(imc)

      switch (true) {
         case (imc <= 18.5):
            setResult(`Maigreur, consultez un nutritionniste`);
            break;
         case (imc <= 25 && imc > 18.5):
            setResult(`Poids normal`);
            break;
         case (imc <= 30 && imc > 25):
            setResult(`Surpoids`);
            break;
         case (imc <= 35 && imc > 30):
            setResult(`Obésité modérée`);
            break;
         case (imc <= 40 && imc > 35):
            setResult(`Obésité sévère, consultez un nutritionniste`);
            break;
         case (imc > 40):
            setResult(`Obésité morbide, consultez un nutritionniste rapidement`);
            break;
         default:
            setResult("Les valeurs données sont incorrectes");
            break;
      }
   }

   return (
      <SafeAreaView style={styles.container}>
         <ScrollView style={styles.scrollContainer} refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
         }  contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
            <ElementsInput
               rightIcon={{ type: 'foundation', name: 'arrow-up' }}
               onChangeText={setSize}
               value={size}
               placeholder="Votre taille en cm"
               keyboardType="numeric"
            />
            <ElementsInput
               rightIcon={{ type: 'foundation', name: 'burst' }}
               onChangeText={setWeight}
               value={weight}
               placeholder="Votre poids en kg"
               keyboardType="numeric"
            />
            <TouchableOpacity
               style={styles.calculateBtn}
               onPress={() => { calculateIMC(size, weight) }}
            >
               <Text style={styles.calculateBtnText}>
                  Calculer mon IMC
               </Text>
            </TouchableOpacity>
            <SafeAreaView>
               <Text style={styles.resultImc}>
                  {imc}
               </Text>
               <Text style={styles.resultText}>
                  {result}
               </Text>
            </SafeAreaView>
         </ScrollView>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      width: "100%",
      flex: 1,
      justifyContent:"center",
   },
   scrollContainer: {
      width: "100%",
      flex: 1,
   },
   calculateBtn: {
      margin: 30,
      borderWidth: 1 / 2,
      borderRadius: 4,
      backgroundColor: "#333",
      color: "#fff",
      textAlign: "center",
      paddingTop: 12,
      paddingBottom: 12,
      justifyContent: "center",
   },
   calculateBtnText: {
      fontSize: 24,
      textAlign: "center",
      color: "#fff",
   },
   resultImc: {
      fontSize: 48,
      fontWeight:"900",
      textAlign: "center",
      color:"#000",
   },
   resultText: {
      fontSize: 24,
      textAlign: "center",
      marginRight:12,
      marginLeft:12,
   }
})

export default ImcCalculator;