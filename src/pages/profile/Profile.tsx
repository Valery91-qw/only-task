import React from 'react';
import PageWrapper from "../../components/helpers/PageWrapper";
import GreetingText from "../../components/profile-components/GreetingsText";
import NickNameTypography from "../../components/profile-components/NickNameTypography";
import ExitButton from "../../components/profile-components/ExitButton";
import ProfileConstants from "./Profile.constants";
import {useNavigate, useParams} from "react-router-dom";
import paths from "../../router/paths";

const Profile: React.FC = () => {

    const params = useParams()
    const navigate = useNavigate()

    const onClick = () => {
        return navigate(paths.LOGIN)
    }

    return (
        <PageWrapper>
            <GreetingText>
                Здравствуйте,{ProfileConstants.NBSP}
                <NickNameTypography>{params.login}</NickNameTypography>
            </GreetingText>
            <ExitButton onClick={onClick}/>
        </PageWrapper>
    );
};

export default Profile;