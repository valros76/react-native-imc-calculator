import React, { useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Input as ElementsInput } from '@rneui/base';

const ImcCalculator = () => {
   const [size, setSize] = useState(0)
   const [weight, setWeight] = useState(0)
   const [imc, setImc] = useState(0)
   const [result, setResult] = useState('')

   const [refreshing, setRefreshing] = React.useState(false);

   const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
         setRefreshing(false);
      }, 2000);
   }, []);

   const calculateIMC = (weight, size) => {
      // IMC = ((poids * 10000) / (taille * taille))
      const imc = (Number(weight) * 10000) / (Number(size) * Number(size))
      setImc(imc.toFixed(1))

      switch (true) {
         case (imc <= 18.5):
            setResult(`IMC : ${imc} -- Maigreur, consultez un nutritionniste.`);
            break;
         case (imc <= 25 && imc > 18.5):
            setResult(`IMC : ${imc} -- Poids normal.`);
            break;
         case (imc <= 30 && imc > 25):
            setResult(`IMC : ${imc} -- Surpoids.`);
            break;
         case (imc <= 35 && imc > 30):
            setResult(`IMC : ${imc} -- Obésité modérée.`);
            break;
         case (imc <= 40 && imc > 35):
            setResult(`IMC : ${imc} -- Obésité sévère, consultez un nutritionniste.`);
            break;
         case (imc > 40):
            setResult(`IMC : ${imc} -- Obésité morbide, consultez un nutritionniste rapidement.`);
            break;
         default:
            setResult("Les valeurs données sont incorrectes.");
            break;
      }
   }

   return (
      <SafeAreaView style={styles.container}>
         <ScrollView style={styles.container} refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
         }>
            <TextInput 
               placeholder="Text enter"
            />
            <ElementsInput
               placeholder="Votre taille en cm"
               rightIcon={{ type: 'foundation', name: 'arrow-up' }}
               onChangeText={(size) => setSize(size)}
               autoCapitalize="none"
               keyboardType="number-pad"
            />
            <ElementsInput
               placeholder="Votre poids en kg"
               rightIcon={{ type: 'foundation', name: 'burst' }}
               onChangeText={(weight) => setWeight(weight)}
               autoCapitalize="none"
               keyboardType="number-pad"
            />
            <TouchableOpacity
               style={styles.calculateBtn}
               onPress={() => { calculateIMC(weight, size) }}
            >
               <Text style={styles.calculateBtnText}>
                  Calculer mon IMC
               </Text>
            </TouchableOpacity>
            <SafeAreaView>
               <Text style={styles.resultImc}>
                  {imc > 0}
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
   },
   calculateBtn: {
      margin: 30,
      borderWidth: 1 / 2,
      borderRadius: 5,
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
      fontSize: 24,
      textAlign: "center",
   },
   resultText: {
      fontSize: 18,
      textAlign: "center",
   }
})

export default ImcCalculator;