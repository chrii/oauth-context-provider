export const i = () =>
  window.gapi.load(
    "auth2:client",
    async () =>
      await window.gapi.auth2
        .init({
          client_id:
            "482355446770-ahbt3q9mm7sf1180d6en56ijh4p3jde1.apps.googleusercontent.com",
          scope: "email"
        })
        .then(onInit => {
          return onInit;
        })
  );
