import {StyledLink} from "./Link.style";


interface LinkProps{

children:React.ReactNode;

}


function Link({
children
}:LinkProps){

return(
<StyledLink>
{children}
</StyledLink>
)

}


export default Link;