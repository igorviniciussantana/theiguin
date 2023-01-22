import { CardWrapper, Icon, Info, Subtitle, Title } from "./styled";
import localFont from "@next/font/local";

const NeueMachineLight = localFont({
    src: "./../../pages/fonts/PPNeueMachina-InktrapLight.otf",
  });
  const NeueMachineUltrabold = localFont({
    src: "./../../pages/fonts/PPNeueMachina-InktrapUltrabold.otf",
  });
  
export default function Card(){
    return(
        <CardWrapper>
            <Icon src='/icons/whatsapp.svg'/>
            <Info>
                <Subtitle className={NeueMachineLight.className}>Entrar em contato no Whatsapp</Subtitle>
                <Title className={NeueMachineUltrabold.className}>Fazer Orçamento</Title>
            </Info>
        </CardWrapper>
    )
}