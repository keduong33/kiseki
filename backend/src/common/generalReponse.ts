export const general500Response = (message: string) =>
  new Response(message, {
    status: 500,
  });
