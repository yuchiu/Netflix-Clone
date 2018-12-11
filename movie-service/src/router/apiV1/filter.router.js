import express from "express";

import { filterController } from "../../controllers";

const router = express.Router();

router.post("/", filterController.getFilteredData);

export default router;
