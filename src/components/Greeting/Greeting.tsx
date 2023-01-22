import { GreetingWrapper, Title, Subtitle } from "./styled"
import { AkiraExpanded, NeueMachineLight } from "@/pages/fonts/exports"

export default function Greeting(){
    return(
       <GreetingWrapper>
        <Title className={AkiraExpanded.className}>Seja bem vindo!</Title>
        <Subtitle className={NeueMachineLight.className}>Página de Links</Subtitle>
       </GreetingWrapper>
    )
}