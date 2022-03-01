import { rest } from "msw";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_SOCIAL}users/register`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: "53",
          name: "Tom",
          token: "superTom",
        })
      );
    }
  ),
];
