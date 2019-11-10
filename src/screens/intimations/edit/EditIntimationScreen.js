import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Calendar } from 'react-native-calendars';
import { TextInput, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EditIntimationScreen = () => {

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <ScrollView style={{ flex: 1, padding: 32, paddingTop: 0}}>
                <Calendar
                    style={
                        {
                            marginTop: 60,
                            width: 350,
                            borderWidth: 1,
                            borderColor: '#D8DADA',
                            borderRadius: 10
                        }
                    }
                />

                <TextInput
                    style={
                        {
                            width: 350,
                            height: 100,
                            borderColor: 'gray',
                            borderRadius: 3,
                            borderColor: '#D8DADA',
                            borderWidth: 1,
                            marginTop: 30,
                            padding: 5,
                            paddingLeft: 12,
                            color: '#595959',
                            fontSize: 16
                        }
                    }
                    placeholder='Reason...'
                    multiline
                    textAlignVertical={'top'}>
                </TextInput>

                <TouchableOpacity
                    style={
                        {
                            alignItems: 'center',
                            backgroundColor: '#2282D3',
                            padding: 20,
                            width: 350,
                            borderRadius: 3,
                            marginTop: 50,
                            marginBottom: 20
                        }
                    }
                >
                    <Text style={{ color: 'white', fontSize: 16 }}>Create</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

EditIntimationScreen.navigationOptions = {
    title: 'Edit',
    tabBarIcon: ({ focused }) => {
        let i = focused ? <FontAwesomeIcon icon='pen-square' size={25} color={'#0977D3'} />
            : <FontAwesomeIcon icon='pen-square' size={25} color={'#393939'} />
        return i;
    }
}

export default EditIntimationScreen;
