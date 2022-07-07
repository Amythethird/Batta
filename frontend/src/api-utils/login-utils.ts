import jwtDecode from "jwt-decode";

const accessTokenKey = "accessToken";

export async function login(
  identifier: string,
  password: string
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    // eslint-disable-next-line no-undef
    fetch(`${process.env.REACT_APP_STRAPI}/api/auth/local`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: identifier,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((loginData) => {
        if (loginData.jwt) {
          sessionStorage.setItem(accessTokenKey, loginData.jwt);
          resolve();
        } else {
          reject();
        }
      });
  });
}

export function logout(): void {
  sessionStorage.removeItem(accessTokenKey);
}

export function isLoggedIn(): boolean {
  return sessionStorage.getItem(accessTokenKey) ? true : false;
}

export function getAccessToken(): string | null {
  return sessionStorage.getItem(accessTokenKey);
}

export function getAccessTokenPayload(): any {
  const accessToken = getAccessToken();
  if (accessToken) {
    return jwtDecode(accessToken);
  } else {
    throw new Error("No accessToken available!");
  }
}
