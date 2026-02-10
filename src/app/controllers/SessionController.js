<<<<<<< HEAD
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import authConfig from './../../config/auth.js';
import User from '../models/User.js';
=======
import * as Yup from 'yup';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479

class SessionController {
  async store(req, res) {
    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    const isValid = await schema.isValid(req.body, {
      abortEarly: false,
      strict: true,
    });

    const emailOrPasswordIncorrect = () => {
      return res.status(400).json({ error: 'Email ou senha incorretos' });
    };

    if (!isValid) {
      emailOrPasswordIncorrect();
    }

    const { email, password } = req.body;

    const existingUser = await User.findOne({
      where: {
        email,
      },
    });

    if (!existingUser) {
      emailOrPasswordIncorrect();
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password_hash,
    );

    if (!isPasswordCorrect) {
      emailOrPasswordIncorrect();
    }

<<<<<<< HEAD
    const token = jwt.sign(
      { id: existingUser.id, admin: existingUser.admin},
      authConfig.secret,
      {
        expiresIn: authConfig.expiresIn,
      },
    );

=======
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479
    return res.status(200).json({
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      admin: existingUser.admin,
<<<<<<< HEAD
      token,
=======
>>>>>>> f7d6b1d2207b5a6809c62817b3c4df29f175d479
    });
  }
}

export default new SessionController();
