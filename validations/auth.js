import { body } from 'express-validator';

// eslint-disable-next-line import/prefer-default-export
export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть не короче 5 символов').isLength({ min: 5 }),
  body('fullName', 'Имя должно состоять минимум из 3 символов').isLength({ min: 3 }),
  body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(),
];
