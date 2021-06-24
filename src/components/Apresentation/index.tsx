import { H2, H1, GreenStuff } from "./styles";

import { Section, HelperDiv } from "../UI/Auth/index"

export default function Apresentation(){
    return (
        <Section>
            <HelperDiv><i><H2>The Greatest App</H2></i></HelperDiv>
            
            <HelperDiv><GreenStuff>for</GreenStuff></HelperDiv>
            
            <H1><i>LOTTERY</i></H1>
        </Section>
    )
}