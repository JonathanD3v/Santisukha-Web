const CryptoJS = require("crypto-js");

export const getMethod = async (api, token = "") => {
  try {
    const res = await fetch(api, {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
    if (
    res?.message === "Unauthenticated" ||
    (res?.errors &&
        res?.errors[0]?.message ===
        "E_UNAUTHORIZED_ACCESS: Unauthorized access")
    ) {
    localStorage.removeItem("m_g_a");
    window.location.reload();
    return;
    }
    return res;
  } catch (err) {
    return err.message;
  }
};

export const postMethod = async (api, data, token = "") => {
  try {
    const res = await fetch(api, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    if (
      res?.message === "Unauthenticated" ||
      (res?.errors &&
        res?.errors[0]?.message ===
          "E_UNAUTHORIZED_ACCESS: Unauthorized access")
    ) {
      localStorage.removeItem("m_g_a");
      window.location.reload();
      return;
    }
    return res;
  } catch (err) {
    return err.message;
  }
};

export const postMethodFormData = async (api, formData, token = "") => {
  try {
    const res = await fetch(api, {
      method: "POST",
      headers: {
        accept: "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }).then((res) => res.json());
    if (
      res?.message === "Unauthenticated" ||
      (res?.errors &&
        res?.errors[0]?.message ===
          "E_UNAUTHORIZED_ACCESS: Unauthorized access")
    ) {
      localStorage.removeItem("m_g_a");
      window.location.reload();
      return;
    }
    return res;
  } catch (err) {
    return err.message;
  }
};
export const deleteMethod = async (api, data, token = "") => {
  try {
    const res = await fetch(api, {
      method: "DELETE",
      headers: {
        accept: "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: data,
    }).then((res) => res.json());
    if (
      res?.message === "Unauthenticated" ||
      (res?.errors &&
        res?.errors[0]?.message ===
          "E_UNAUTHORIZED_ACCESS: Unauthorized access")
    ) {
      localStorage.removeItem("m_g_a");
      window.location.reload();
      return;
    }
    return res;
  } catch (err) {
    return err.message;
  }
};

export const encodeData = (data) => {
  const deText = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.REACT_APP_SECRET_KEY
  ).toString();
  return deText;
};

export const decodeData = (data) => {
  try {
    const bytes = CryptoJS.AES.decrypt(data, process.env.REACT_APP_SECRET_KEY);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (err) {
    const token = localStorage.getItem("m_g_a");
    if (token) {
      localStorage.removeItem("m_g_a");
      window.location.reload();
    }
  }
};
