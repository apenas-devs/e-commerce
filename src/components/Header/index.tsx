import { 
    HeaderContainer,
    ProfileIcon,
    SearchIcon,
    UserContainer,
    Username
} from "./Header.ts";  

import UserIcon from '@/assets/Header/User.svg'
import MagnifierIcon from '@/assets/Header/Magnifier.svg'

const Header = () => {

    const name = 'Anna Doe';

    return (
        <HeaderContainer>
            <UserContainer>
                <ProfileIcon src={UserIcon} />
                <Username>{name}</Username>
            </UserContainer>
            <SearchIcon src={MagnifierIcon}/>
        </HeaderContainer>
    )
}

export default Header;