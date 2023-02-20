import { Text } from 'react-native';
import { BottomRetangle, Container, ProductTitle, ProductSubTitle, ProductDescription} from './styles';

export function Home() {
    return(
        <Container>
            <BottomRetangle>
                <ProductTitle>HOMEPOD</ProductTitle>
                <ProductSubTitle>2nd generation</ProductSubTitle>
                <ProductDescription>Immersive, hight-fidelity audio.</ProductDescription>
            </BottomRetangle>
        </Container>
    )
}