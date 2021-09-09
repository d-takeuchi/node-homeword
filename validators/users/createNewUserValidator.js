const { check } = require("express-validator");

//ユーザー新規登録処理のバリデーション設定
module.exports = [
  check("name").notEmpty().withMessage("Nameの入力は必須です"),
  check("email").notEmpty().withMessage("E-Mail Addressの入力は必須です"),
  check("password")
    .notEmpty()
    .withMessage("Passwordの入力は必須です")
    .isLength({ min: 7 })
    .withMessage("Passwordは7文字以上です"),
  check("confirmPassword")
    .notEmpty()
    .withMessage("Confirm Passwordの入力は必須です")
    .custom((value, { req }) => {
      if (req.body.password !== req.body.confirmPassword) {
        throw new Error("確認用パスワードと一致しません");
      }
      return true;
    }),
];
