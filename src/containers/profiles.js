import React from "react";
import { Bar, Header, Profiles } from "../components";
import { browsePage, global } from "../constants/ui-text";

export default function ProfilesContainer({ user , setProfile }) {
  return (<>
    <Header bg={false} >
      <Bar>
        <Bar.Logo />
      </Bar>
    </Header>

    <Profiles>
      <Profiles.Title>{browsePage.title}</Profiles.Title>
      <Profiles.List>
        <Profiles.Item>
          <Profiles.Picture src={user.photoURL} />
          <Profiles.Name>{user.displayName}</Profiles.Name>
        </Profiles.Item>
      </Profiles.List>
    </Profiles>
  </>);
}