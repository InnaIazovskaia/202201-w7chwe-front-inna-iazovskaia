import { rest } from "msw";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_SOCIAL}users/register`,
    (req, res, ctx) => {
      res(
        ctx.status(201),
        ctx.json({
          name: "Tom",
          username: "superTom",
          password: "superTom",
        })
      );
    }
  ),
];
