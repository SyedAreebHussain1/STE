export function getFromStorage(key: string) {
  if (!key) {
    return null;
  }
  try {
    let valueStr = localStorage.getItem(key);
    if (valueStr) {
      return JSON.parse(valueStr);
    }
    return null;
  } catch (err) {
    return null;
  }
}

export function setInStorage(key: string, obj: any) {
  if (!key) {
    console.error("Error: Key is missing");
  }
  try {
    localStorage.setItem(key, JSON.stringify(obj));
  } catch (err) {
    console.error(err);
  }
}
export function removeFromStorage(key: string) {
  if (!key) {
    console.error("Error: Key is missing");
  }
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error(err);
  }
}
export function Authorization() {
  let token = getFromStorage("token");
  if (token !== null) {
    return `Bearer ${token}`;
  } else {
    return null;
  }
}
export function generateId() {
  return (
    Math.random().toString(36).substring(2) + new Date().getTime().toString(36)
  );
}
