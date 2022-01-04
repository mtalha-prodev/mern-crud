import User from "../../model/user-schema.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.find();

    res.json({
      status: true,
      data: user,
    });
  } catch (error) {
    res.json({
      status: false,
      error,
    });
  }
};
export const addUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const user = await User({ name, email, phone });

    await user.save();
    res.json({
      status: true,
      data: user,
    });
  } catch (error) {
    res.json({
      status: false,
      error,
      message: "user not add",
    });
  }
};
export const updateUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const _id = req.params.id;

    const user = await User.findByIdAndUpdate(
      { _id },
      { name, email, phone },
      { new: true }
    );

    res.json({
      status: true,
      data: user,
    });
  } catch (error) {
    res.json({
      status: true,
      error,
    });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const delUser = await User.findByIdAndDelete(req.params.id);

    res.json({
      status: true,
      data: delUser,
      message: "user delete Successfully",
    });
  } catch (error) {
    res.json({
      status: false,
      error,
      message: "user not delete",
    });
  }
};
