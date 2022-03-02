import { signOut } from "next-auth/react";
import Link from "next/link";
import styled from "styled-components";

type PropsType = {
  isPopupVisible: boolean;
};

const ProfileMenuContainer = styled.div`
 position: absolute;
 width: 150px;
 top : 80px;
 right: 0;
 border: 1px solid ${({theme}) => theme.text};

 visibility: hidden;
 opacity: 0;
 transition: visibility 0s linear 300ms, opacity 300ms;

 ${({ isPopupVisible }: PropsType) =>
 isPopupVisible &&
	 `
 visibility: visible;
 opacity: 1;
 transition: visibility 0s linear 0s, opacity 300ms;
 `}
`

const List = styled.ul`
	list-style: none;
`

const Item = styled.a`
	padding: 10px;
	display: block;

	a{
		width: 100%;
	}

	:hover{
		background-color: grey;
		cursor: pointer;
	}
`

const ProfileMenu = ({ isPopupVisible }: PropsType) => {
	return(
		<ProfileMenuContainer isPopupVisible={isPopupVisible}>
			<List>
			<Link href="/profile"><Item>Profil</Item></Link>
				<Item onClick={() => signOut()}>Wyloguj</Item>
			</List>
		</ProfileMenuContainer>
	)
}

export default ProfileMenu;