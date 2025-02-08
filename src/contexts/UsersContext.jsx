import { createContext, useContext, useEffect, useState } from "react";
import { fetchUser } from "../services/user.services";

const UsersContext = createContext({
  users: [],
  isLoading: false,
  page: 1,
  itemsPerPage: 5,
  handleFetchUser: () => {},
  handleNextPage: () => {},
  handlePrevPage: () => {},
  handleSubmitItems: () => {},
});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleFetchUser = async ({ page = 1, results = 5, seed = "abc" }) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchUser({ page, results, seed });
      setUsers(data.results);
      // console.log("data: ", data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextPage = () => {
    if (page >= 20) return;
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page <= 1) return;
    setPage((prev) => prev - 1);
  };

  const handleSubmitItems = (itemsCount) => {
    if (itemsPerPage !== itemsCount) {
      setItemsPerPage(itemsCount);
    }
  };

  // Error Boundary test
  // useEffect(() => {
  //   if (page === 6) {
  //     throw new Error(`Error Boundary test, we have reached page: ${page}`);
  //   }
  // }, [page]);

  useEffect(() => {
    handleFetchUser({ page, results: itemsPerPage, seed: "abc" });
  }, [page, itemsPerPage]);

  return (
    <UsersContext.Provider
      value={{
        users,
        isLoading,
        error,
        page,
        itemsPerPage,
        handleFetchUser,
        handlePrevPage,
        handleNextPage,
        handleSubmitItems,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("Use Users Context within the Provider");
  }

  return context;
};
