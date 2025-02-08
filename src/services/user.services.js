import { baseURL } from "../config/api.config";

const fetchUser = async ({ page, results, seed }) => {
  page = page || 1;
  results = results || 5;
  seed = seed || "abc";

  try {
    const url = `${baseURL}?page=${page}&results=${results}&seed=${seed}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("res: ", response);
    if (!response.ok) {
      throw new Error("ERR :: User fetching failed!");
    }

    const data = await response.json();
    console.log("data in service: ", data);
    return data;
  } catch (error) {
    throw new Error("Unable to fetch user data");
  }
};

export { fetchUser };
