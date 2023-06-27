import Edu from "./WonderBundle/Edu";
import Refe from "./WonderBundle/Refe";
import Skill from "./WonderBundle/Skill";

const ResumeSlider = ({data}) => {
    const {skill,edu,refe}=data;
    
    if(skill){
        return(
            <Skill/>
        )
    }else if(edu){
        return(
            <Edu/>
        )
    }else{
        return(
            <Refe/>
        )
    }
}

export default ResumeSlider