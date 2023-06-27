import Edu from "./WonderBundle/Edu";
import Skill from "./WonderBundle/Skill";

const ResumeSlider = ({data}) => {
    const {skill,edu}=data;
    
    if(skill){
        return(
            <Skill/>
        )
    }else if(edu){
        return(
            <Edu/>
        )
    }
}

export default ResumeSlider