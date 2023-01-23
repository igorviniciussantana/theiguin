import { CardWrapper, Icon, Info, Subtitle, Title } from "./styled";
import localFont from "@next/font/local";

interface CardProps{
    icon: string;
    title: string;
    subtitle: string;
    url: string;
}


const NeueMachineLight = localFont({
    src: "./../../pages/fonts/PPNeueMachina-InktrapLight.otf",
  });
  const NeueMachineUltrabold = localFont({
    src: "./../../pages/fonts/PPNeueMachina-InktrapUltrabold.otf",
  });
  
export default function Card({icon, url, title, subtitle} : CardProps){
    return(
        <CardWrapper href={url}>
            <Icon src={icon}/>
            <Info>
                <Subtitle className={NeueMachineLight.className}>{subtitle}</Subtitle>
                <Title className={NeueMachineUltrabold.className}>{title}</Title>
            </Info>
        </CardWrapper>
    )
}