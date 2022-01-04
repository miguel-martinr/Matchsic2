
export const getProfileLinkService = (username: string) => {
  try {
    return `http://localhost:3000/${username}`;
  } catch (error: any) {
    const errorMessage = error.message || 'unknown';
    throw new Error(`getProfileLink service error: ${errorMessage}`);
  }
};
