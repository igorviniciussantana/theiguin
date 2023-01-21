import {BackgroundWrapper, PurpleDown, PurpleUp, YellowDown, YellowUp} from './styled'




export default function Background(){
return(
    <BackgroundWrapper>
        <YellowUp></YellowUp>
        <YellowDown></YellowDown>
        <PurpleDown></PurpleDown>
        <PurpleUp></PurpleUp>
    </BackgroundWrapper>
)
}