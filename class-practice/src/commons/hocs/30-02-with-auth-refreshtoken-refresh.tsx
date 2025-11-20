import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getAccessToken } from "../libraries/30-01-get-access-token";
import { useLoadedStore } from "../stores/30-02-loaded-store";
import { useAccessTokenStore } from "../stores/20-01-access-token-store";

export const withAuth = (컴포넌트) => () => {
  const router = useRouter();
  const { isLoaded } = useLoadedStore();
  const { accessToken } = useAccessTokenStore();

  useEffect(() => {
    if (isLoaded && !accessToken) {
      alert("로그인 후 이용 가능합니다!!!");
      router.push("/section30/30-02-login-refreshtoken-refresh");
    }
  }, [isLoaded]);

  return <컴포넌트 />;
};
