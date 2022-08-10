import { body } from 'express-validator';

// eslint-disable-next-line import/prefer-default-export
export const loginValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть не короче 5 символов').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть не короче 5 символов').isLength({ min: 5 }),
  body('fullName', 'Имя должно состоять минимум из 3 символов').isLength({ min: 3 }),
  body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст статьи').isLength({ min: 10 }).isString(),
  body('tags', 'Неверный формат тегов, укажите массив').optional().isArray(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];
