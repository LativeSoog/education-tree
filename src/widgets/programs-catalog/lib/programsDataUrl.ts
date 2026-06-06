export const getProgramsDataBaseUrl = (manifestUrl: string) => {
  return manifestUrl.slice(0, manifestUrl.lastIndexOf("/") + 1);
};

export const createProgramsDataFileUrl = (
  baseUrl: string,
  fileName: string
) => {
  return `${baseUrl}${fileName}`;
};
