import React from 'react';
import { StyleSheet, View, Text, SectionList } from 'react-native';
import * as RNElements from '@rneui/base';

const aboutSectionsDatas = [
   {
      title: "Développeur",
      data: ["Webdevoo"],
   },
   {
      title: "Type de projet",
      data: ["Open-Source"]
   },
   {
      title: "Date de création",
      data: ["Mai 2023"]
   },
   {
      title: "Objectif de l'application",
      data: ["Module de formation", "Apprendre à créer une application avec React Native"]
   },
   {
      title: "Lieu de formation",
      data: ["G2R Formation", "102 Av. Philippe Auguste", "75011 Paris"]
   },
   {
      title: "Nom du formateur",
      data: ["Dufrène Valérian"]
   },
   {
      title: "Informations complémentaires",
      data: ["Projet réalisé lors d'une formation React Native", "Objectif final [Chapitre 1, Module 2] de la formation React Native"]
   }
];

class AboutScreen extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <RNElements.Avatar
               size="xlarge"
               rounded
               source={require("../assets/animated_cat.gif")}
               margin={32}
            />
               <SectionList
                  sections={aboutSectionsDatas}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => (
                     <View style={styles.item}>
                        <Text style={styles.sectionListTitle}>{item}</Text>
                     </View>
                  )}
                  renderSectionHeader={({ section: { title } }) => (
                     <Text style={styles.sectionListHeader}>{title}</Text>
                  )}
                  style={styles.sectionList}
               />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   sectionList: {
      width:"100%",
      flex:1,
      textAlign: "center",
   },
   sectionListTitle: {
      fontSize: 18,
      textAlign: "center",
      color:"#666",
   },
   sectionListHeader: {
      fontSize: 22,
      fontWeight:"700",
      backgroundColor: '#fff',
      padding: 10,
      textAlign: "center",
   },
   item: {
      paddingLeft: 15,
      paddingRight: 15,
      marginVertical: 10,
   },
})

export default AboutScreen;