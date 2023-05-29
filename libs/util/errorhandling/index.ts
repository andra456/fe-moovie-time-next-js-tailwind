export function handleErrors(error: any) {
  console.error(error);
}

export const _checkStatus = (response: any) => {
  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) {
    // Success status lies between 200 to 300
    return Promise.resolve(response ? response : null);
  } else {
    console.error(response.statusText);
    return Promise.reject();
  }
};
