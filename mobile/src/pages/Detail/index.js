import React, { Fragment } from 'react';
import { View, Image, Text, TouchableOpacity, Linking, SafeAreaView } from 'react-native';
import styles from './styles';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

export default function Incidents() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const message = 'Olá ' + incident.name + ', gostariamos de ajudar no caso ' + incident.title + ' com o valor de ' + Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value);

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do Caso: ` + incident.title,
            recipients: [incident.email],
            body: message,
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone= ` + incident.whatsapp + ` &text= ` + message);
    }

    return (
        <Fragment>
            <SafeAreaView style={styles.safeareaview} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logoImg} />
                    <TouchableOpacity onPress={navigateBack}>

                        <Text style={styles.headerText}>Home</Text>
                        <Feather style={styles.icon} name="arrow-left" size={25} color="red" />
                    </TouchableOpacity>
                </View>

                <View style={styles.incidents}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>
                    <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                    <Text style={styles.incidentValue}>{incident.description}</Text>
                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
                </View>
                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve o Dia!</Text>
                    <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                    <Text style={styles.heroDescription}>Entre em Contato:</Text>
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                            <Feather name="message-circle" size={20} color="black" />
                            <Text style={styles.links}>WhatsApp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} onPress={sendMail}>
                            <Feather name="inbox" size={20} color="black" />
                            <Text style={styles.links}>E-mail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Fragment>
    );
}