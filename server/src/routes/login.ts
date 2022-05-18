import express from 'express';
import { authenticate, generateAuthenticationToken } from '../store';
const login = express.Router();

login.post('/', (req, res, _next) => {
  authenticate({ email: req.body.email, password: req.body.password })
    .then(async ({ success, id }) => {
      if (success) {
        await new Promise(r => setTimeout(r, 1000));
        const auth_token = await generateAuthenticationToken({ id });
        res.status(200).send({
          response: 'OK',
          auth_token,
        });
      } else {
        res.status(401).send({
          response: 'DENIED',
        });
      }
    });
});

export default login;