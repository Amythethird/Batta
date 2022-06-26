import LoginData from "./models/login-data";

export async function login(
  identifier: string,
  password: string
): Promise<LoginData> {
  return new Promise<LoginData>((resolve, reject) => {
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
        if (loginData.jwt && loginData.user) {
          resolve({
            jwt: loginData.jwt,
            user: {
              id: loginData.user.id,
              username: loginData.user.username,
              email: loginData.user.email,
            },
          } as LoginData);
        } else {
          reject();
        }
      });
  });
}
