export const Response500 = (message: string) =>
  new Response(message, {
    status: 500,
  });
