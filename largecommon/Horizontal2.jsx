import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Image, Votes } from '../common';
import Title from '../components/Title';
import { apiImage } from '../myapi';
import { trimText } from '../tool';
import Hordata2 from './Hordata2';



const MainContainer = styled.View`
    flex-direction:row;
    margin: 7px 8px 7px 8px;
`;

const Container = styled.View`
    flex:1;
`
const ScrollView = styled.ScrollView`
    flex-direction:row;
`;

const Text = styled.Text`
    color:white;
    text-align:center;
`;


const Horizontal2 = ({data,titles}) => {
    const navigation = useNavigation();
    const goToDetail = () => navigation.navigate("Details");
    return (
        <Container>
            <Title title={titles}/>
            <ScrollView horizontal={true}>
            <MainContainer>
            {data.map(result => 
            <Hordata2
            name={result.name} 
            titles={result.title}
            result={result} 
            id={result.id}
            url={apiImage(result.poster_path)}
            key={result.id}
            overview={result.overview}
            vote={result.vote_average}
            />
            )}
            </MainContainer>
            </ScrollView>
        </Container>
    );
};

export default Horizontal2;