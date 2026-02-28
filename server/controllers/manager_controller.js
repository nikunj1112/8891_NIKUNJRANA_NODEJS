import Manager from "../models/manager.js";

export const createManager = async (req, res) => {
  try {
    const { name, email, salary, designation, phone, status } = req.body;

    if (!name || !email || !salary || !designation) {
      return res.status(400).json({
        success: false,
        message: "Name, email, salary, and designation are required"
      });
    }

    const existingManager = await Manager.findOne({ email });
    if (existingManager) {
      return res.status(400).json({
        success: false,
        message: "Manager with this email already exists"
      });
    }

    const now = new Date().toISOString();

    const newManager = new Manager({
      name,
      email,
      salary,
      designation,
      phone: phone || "",
      status: status !== undefined ? status : true,
      created_date: now,
      updated_date: now
    });

    await newManager.save();

    return res.status(201).json({
      success: true,
      message: "Manager created successfully",
      data: newManager
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

export const getAllManagers = async (req, res) => {
  try {
    const managers = await Manager.find();

    return res.status(200).json({
      success: true,
      count: managers.length,
      data: managers
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

export const deleteManager = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Manager ID is required"
      });
    }

    const deletedManager = await Manager.findByIdAndDelete(id);

    if (!deletedManager) {
      return res.status(404).json({
        success: false,
        message: "Manager not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Manager deleted successfully"
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

export const updateManager = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, salary, designation, phone, status } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Manager ID is required"
      });
    }

    // Check duplicate email if updating
    if (email) {
      const existingManager = await Manager.findOne({
        email,
        _id: { $ne: id }
      });

      if (existingManager) {
        return res.status(400).json({
          success: false,
          message: "Email already in use by another manager"
        });
      }
    }

    const updatedData = {
      ...(name && { name }),
      ...(email && { email }),
      ...(salary && { salary }),
      ...(designation && { designation }),
      ...(phone !== undefined && { phone }),
      ...(status !== undefined && { status }),
      updated_date: new Date().toISOString()
    };

    const updatedManager = await Manager.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    if (!updatedManager) {
      return res.status(404).json({
        success: false,
        message: "Manager not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Manager updated successfully",
      data: updatedManager
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

export const searchManagers = async (req, res) => {
  try {
    const { search } = req.query;

    if (!search) {
      return res.status(400).json({
        success: false,
        message: "Search query is required"
      });
    }

    const managers = await Manager.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } }
      ]
    });

    return res.status(200).json({
      success: true,
      count: managers.length,
      data: managers
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};


export const getManagersWithPagination = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    if (page < 1 || limit < 1) {
      return res.status(400).json({
        success: false,
        message: "Page and limit must be positive numbers"
      });
    }

    const skip = (page - 1) * limit;

    const managers = await Manager.find()
      .skip(skip)
      .limit(limit);

    const totalRecords = await Manager.countDocuments();
    const totalPages = Math.ceil(totalRecords / limit);

    return res.status(200).json({
      success: true,
      pagination: {
        currentPage: page,
        limit,
        totalRecords,
        totalPages
      },
      data: managers
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};

export const deleteMultipleManagers = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Array of manager IDs is required"
      });
    }

    const result = await Manager.deleteMany({
      _id: { $in: ids }
    });

    return res.status(200).json({
      success: true,
      message: `${result.deletedCount} managers deleted successfully`,
      deletedCount: result.deletedCount
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};
