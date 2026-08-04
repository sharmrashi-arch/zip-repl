import { Router, type IRouter } from "express";
import healthRouter from "./health";
import admissionsRouter from "./admissions";
import chatRouter from "./chat";

const router: IRouter = Router();

router.use(healthRouter);
router.use(admissionsRouter);
router.use(chatRouter);

export default router;
