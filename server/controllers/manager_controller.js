import Manager from "../models/manager.js";

export const createManager = async (req, res) => {
  const manager = new Manager({
    ...req.body,
    created_date: new Date().toISOString(),
    updated_date: new Date().toISOString()
  });

  await manager.save();
  res.json({ message: "Manager Created" });
};

export const getManagers = async (req, res) => {
  const managers = await Manager.find();
  res.json(managers);
};

export const deleteManager = async (req, res) => {
  await Manager.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

export const updateManager = async (req, res) => {
  await Manager.findByIdAndUpdate(
    req.params.id,
    { ...req.body, updated_date: new Date().toISOString() },
    { new: true }
  );
  res.json({ message: "Updated" });
};

export const searchManager = async (req, res) => {
  const { keyword } = req.query;

  const data = await Manager.find({
    $or: [
      { name: { $regex: keyword, $options: "i" } },
      { email: { $regex: keyword, $options: "i" } }
    ]
  });

  res.json(data);
};

export const paginationManager = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;

  const total = await Manager.countDocuments();
  const data = await Manager.find().skip(skip).limit(limit);

  res.json({
    total,
    page,
    totalPages: Math.ceil(total / limit),
    data
  });
};

export const multiDelete = async (req, res) => {
  await Manager.deleteMany({ _id: { $in: req.body.ids } });
  res.json({ message: "Multiple Deleted" });
};