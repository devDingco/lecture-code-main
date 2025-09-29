"use client";

import { withAuth } from "@/commons/hocs/21-05-with-auth";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다!</>;
}

export default withAuth(LoginSuccessPage);
