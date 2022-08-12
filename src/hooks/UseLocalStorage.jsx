import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    // Check if function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    // Set to state
    setLocalStorageValue(value);
    // Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;

/* Notes:
Window.localStorage
- read-only property of the window
- allows you to access a Storage object for the Document's origin;
- the stored data is saved across browser sessions.
- it is similar to sessionStorage, except that while localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends — that is, when the page is closed.

#JSON.Stringify() - Converts a JavaScript object or value to a JSON string.
#JSON.parse() - Converts a JavaScript Object Notation (JSON) string into an object.
*/
