import { GreetingWrapper, Title, Subtitle, Logo } from "./styled";
import localFont from "@next/font/local";

const AkiraExpanded = localFont({
  src: "./../../pages/fonts/Akira_Expanded_Demo.otf",
});
const NeueMachineLight = localFont({
  src: "./../../pages/fonts/PPNeueMachina-InktrapLight.otf",
});
const NeueMachineBold = localFont({
  src: "./../../pages/fonts/PPNeueMachina-InktrapUltrabold.otf",
});

export default function Greeting() {
  return (
    <GreetingWrapper>
      <Title className={AkiraExpanded.className}>Seja bem vindo!</Title>
      <Subtitle className={NeueMachineLight.className}>
        Página de Links
      </Subtitle>
      <Logo src="/iguinlogo.svg" />
    </GreetingWrapper>
  );
}
