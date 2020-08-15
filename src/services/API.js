import axios from "axios";
// export const BACKEND_URL = "https://babouche.herokuapp.com";
export const BACKEND_URL = "http://localhost:3500";

export async function getInputs(code) {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/code/${code}`,
      undefined,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return response.data;
  } catch (err) {
    throw new Error("Mauvais code, réessayez");
  }
}

export async function sendData(data) {
  try {
    axios();
    await axios.post(`${BACKEND_URL}/infos`, data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    throw new Error(
      "Une erreur est survenue, merci de réactualiser la page et réessayer plus tard"
    );
  }
}
