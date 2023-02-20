import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #010101;
`

export const BottomRetangle = styled.View`
    margin-top: auto;
    width: 100%;
    height: 375px;
    border-radius: 40px;
    background-color: #2E2F34;
    padding: 24px;
`;

export const ProductTitle = styled.Text`
    font-size: 30px;
    font-family:  Montserrat_700Bold;
    color: #fff;
`;

export const ProductDescription = styled.Text`
    font-family: Montserrat_700Bold;
    font-size: 13px;
    color: #fff;
`;

export const ProductText = styled.Text`
    font-family: Montserrat_400Regular;
    font-size: 14px;
    color: #fff;
    margin-top: 20px;
`;

export const Footer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    margin-bottom: 15px;
`;

export const PriceTag = styled.Text`
    font-family:  Montserrat_700Bold;
    font-size: 24px;
    color: #FFF;
`;

export const PurchaseButton = styled.TouchableOpacity`
    width: 150px;
    height: 50px;
    background-color: #007aff;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ButtonTitle = styled.Text`
    font-family: Montserrat_700Bold;
    font-size: 14px;
    color: #fff;
`;