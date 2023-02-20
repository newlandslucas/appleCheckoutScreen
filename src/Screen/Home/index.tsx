import { BottomRetangle, Container, ProductTitle, ProductDescription, ProductText, Footer, PriceTag, ButtonTitle, PurchaseButton} from './styles';
import { Entypo } from '@expo/vector-icons'; 


export function Home() {
    return(
        <Container>
            <BottomRetangle>
                <ProductTitle>HOMEPOD</ProductTitle>
                <ProductDescription>Immersive, hight-fidelity audio.</ProductDescription>
                <ProductText>HomePod is a powerhouse of a speaker. Apple‑engineered audio technology and advanced software deliver high‑fidelity sound throughout the room. It intelligently adapts to whatever it’s playing — or wherever it’s playing — and surrounds you in immersive audio that makes everything you listen to sound incredible.</ProductText>

                <Footer>
                    <PriceTag>$ 299.00</PriceTag>
                    <PurchaseButton>
                        <ButtonTitle>Add to cart</ButtonTitle>
                        <Entypo name="chevron-small-right" size={22} color="white" />
                    </PurchaseButton>
                </Footer>


            </BottomRetangle>
        </Container>
    )
}