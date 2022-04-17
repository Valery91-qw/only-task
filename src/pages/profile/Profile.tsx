import React from 'react';
import PageWrapper from "../../components/helpers/PageWrapper";
import GreetingText from "../../components/profile-components/GreetingsText";
import NickNameTypography from "../../components/profile-components/NickNameTypography";
import ExitButton from "../../components/profile-components/ExitButton";
import ProfileConstants from "./Profile.constants";

const Profile: React.FC<{name?: string}> = ({name = 'steve.jobs@example.com'}) => {
    return (
        <PageWrapper>
            <GreetingText>
                Здравствуйте,{ProfileConstants.NBSP}
                <NickNameTypography>{name}</NickNameTypography>
            </GreetingText>
            <ExitButton />
        </PageWrapper>
    );
};

Profile.defaultProps = {
    name: 'steve.jobs@example.com'
}

export default Profile;