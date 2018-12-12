import express from "express";

import catchExceptions from "../../utils/catchExceptions";
import { filterController } from "../../controllers";

const router = express.Router();

router.post("/", catchExceptions(filterController.getFilteredData));

export default router;
